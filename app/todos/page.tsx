import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { LogoutButton } from "@/components/logout-button"
import { createClient } from "@/utils/supabase/server"

type Todo = {
  id: string
  name: string
}

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  if (!supabase) {
    redirect("/login")
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  const { data: todos, error } = await supabase.from("todos").select("id, name").returns<Todo[]>()

  if (error) {
    console.error("Failed to load todos", error)
    return <p>Unable to load todos.</p>
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Todos</h1>
        <LogoutButton />
      </div>
      <ul className="list-disc space-y-2 pl-5">
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </main>
  )
}
