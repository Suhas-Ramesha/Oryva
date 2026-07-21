import type { Metadata } from "next";
import { AccountView } from "@/components/sections/account-view";

export const metadata: Metadata = {
  title: "Your Account",
  description: "Manage your ORYVA-AI account.",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return <AccountView />;
}
