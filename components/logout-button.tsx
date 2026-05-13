"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"

export function LogoutButton() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogout = async () => {
    setIsSubmitting(true)

    const supabase = createClient()

    if (!supabase) {
      router.replace("/login")
      router.refresh()
      return
    }

    await supabase.auth.signOut()
    router.replace("/login")
    router.refresh()
  }

  return (
    <Button type="button" variant="outline" onClick={handleLogout} disabled={isSubmitting}>
      {isSubmitting ? "Logging out..." : "Log out"}
    </Button>
  )
}
