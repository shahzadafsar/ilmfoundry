import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://bqxyjltzfkjjntlgrjnn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxeHlqbHR6Zmtqam50bGdyam5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMjI5NjksImV4cCI6MjA3OTY5ODk2OX0.Lin-0DFUUsqZTboRCZO2x2AXoEXyDa31jriNPaVmgQs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
