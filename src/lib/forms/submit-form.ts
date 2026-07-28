export type FormResponse =
  | { ok: true }
  | { ok: false; error: "validation" | "spam" | "delivery" };

export async function submitForm<T>(url: string, values: T): Promise<FormResponse> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = (await response.json().catch(() => null)) as FormResponse | null;
    if (!data || typeof data !== "object" || !("ok" in data)) {
      return { ok: false, error: "delivery" };
    }
    if (data.ok) return { ok: true };
    if (data.error === "validation" || data.error === "spam" || data.error === "delivery") {
      return data;
    }
    return { ok: false, error: "delivery" };
  } catch {
    return { ok: false, error: "delivery" };
  }
}
