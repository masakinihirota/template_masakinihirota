'use client';

import { useEffect, useState } from 'react';

// Supabaseクライアントのクライアントを作成
import { createClient } from '@/utils/supabase/client';

export default function ClientComponent() {
  const [todos, setTodos] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const getTodos = async () => {
      const { data } = await supabase.from('todos').select();
      if (data) {
        setTodos(data);
      }
    };

    getTodos();
  }, [supabase, setTodos]);

  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
}
