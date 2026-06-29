import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL     as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const hasCredentials = Boolean(supabaseUrl && supabaseAnonKey);

if (!hasCredentials) {
  console.warn(
    "[StartForge] Supabase non configure — ajoutez VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY."
  );
}

export const supabase: SupabaseClient = hasCredentials
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : createClient("https://placeholder.supabase.co", "placeholder-key");

export { hasCredentials as isSupabaseConfigured };
