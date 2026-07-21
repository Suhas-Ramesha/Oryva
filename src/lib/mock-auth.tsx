"use client";

import * as React from "react";

export type MockUser = { name: string; email: string };

const SESSION_KEY = "oryva_mock_session";
const DIRECTORY_KEY = "oryva_mock_users";

type AuthContextValue = {
  user: MockUser | null;
  ready: boolean;
  register: (name: string, email: string) => MockUser;
  login: (email: string) => MockUser;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

function readDirectory(): Record<string, MockUser> {
  try {
    const raw = localStorage.getItem(DIRECTORY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeDirectory(dir: Record<string, MockUser>) {
  localStorage.setItem(DIRECTORY_KEY, JSON.stringify(dir));
}

export function MockAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<MockUser | null>(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // Deliberately deferred to an effect: localStorage is unavailable during
    // SSR, so reading it during render would desync server/client output.
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setUser(JSON.parse(raw));
    } catch {
      // ignore corrupted session data
    }
    setReady(true);
  }, []);

  const persist = (next: MockUser | null) => {
    setUser(next);
    try {
      if (next) localStorage.setItem(SESSION_KEY, JSON.stringify(next));
      else localStorage.removeItem(SESSION_KEY);
    } catch {
      // localStorage unavailable — session just won't persist across reloads
    }
  };

  const register = (name: string, email: string) => {
    const key = email.trim().toLowerCase();
    const newUser: MockUser = { name: name.trim(), email: key };
    const dir = readDirectory();
    dir[key] = newUser;
    writeDirectory(dir);
    persist(newUser);
    return newUser;
  };

  const login = (email: string) => {
    const key = email.trim().toLowerCase();
    const dir = readDirectory();
    const loggedIn = dir[key] ?? { name: key.split("@")[0], email: key };
    persist(loggedIn);
    return loggedIn;
  };

  const logout = () => persist(null);

  return (
    <AuthContext.Provider value={{ user, ready, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within MockAuthProvider");
  return ctx;
}
