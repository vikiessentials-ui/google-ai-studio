import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Course } from '@/types';

export type { Course };

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || 'placeholder-anon-key';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

