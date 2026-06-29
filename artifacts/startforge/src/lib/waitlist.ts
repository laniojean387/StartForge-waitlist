import { supabase, isSupabaseConfigured } from "./supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type JoinResult =
  | { success: true }
  | { success: false; error: string };

export async function joinWaitlist(email: string): Promise<JoinResult> {
  const value = email.trim().toLowerCase();

  if (!EMAIL_RE.test(value)) {
    return { success: false, error: "Adresse email invalide." };
  }

  if (!isSupabaseConfigured) {
    return {
      success: false,
      error: "Supabase non configure. Ajoutez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY.",
    };
  }

  const { error } = await supabase.from("waitlist").insert({
    email: value,
    source: "landing",
  });

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "Cet email est deja inscrit." };
    }
    console.error("Waitlist insert failed:", error);
    return { success: false, error: "Une erreur est survenue. Reessayez." };
  }

  return { success: true };
}
