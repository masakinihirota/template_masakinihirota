import { createBrowserClient } from '@supabase/ssr';

// Supabase 自作の型 (todosが追加された型ファイル)
import { Database as Database1 } from '@/types/database.types';
// Supabase スターターが用意した型ファイル
import { Database as Database2 } from '@/types/types_db';

// 2つの型を混ぜる
type CombinedDatabase = Database1 & Database2;

// Define a function to create a Supabase client for client-side operations
export const createClient = () =>
  // createBrowserClient<Database>(
  createBrowserClient<CombinedDatabase>(
    // Pass Supabase URL and anonymous key from the environment to the client
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
