import { cookies } from "next/headers"

import { createClient } from "@/utils/supabase/server"

type Todo = {
  id: string
  name: string
}

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos, error } = await supabase.from("todos").select("id, name").returns<Todo[]>()

  if (error) {
    console.error("Failed to load todos", error)
    return <p>Unable to load todos.</p>
  }

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  )
}
