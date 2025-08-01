// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseAnonKey = 'your-anon-key'; // safe to use in frontend

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

