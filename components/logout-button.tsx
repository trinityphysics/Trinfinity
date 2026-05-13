"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/client"

export function LogoutButton() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleLogout = async () => {
    setErrorMessage("")
    setIsSubmitting(true)

    const supabase = createClient()

    if (!supabase) {
      setErrorMessage("Unable to log out because Supabase auth is not configured.")
      setIsSubmitting(false)
      return
    }

    try {
      await supabase.auth.signOut()
      router.replace("/login")
      router.refresh()
    } catch (error) {
      console.error("Failed to sign out", error)
      setErrorMessage("Unable to log out right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col items-end gap-2">
      <Button type="button" variant="outline" onClick={handleLogout} disabled={isSubmitting}>
        {isSubmitting ? "Logging out..." : "Log out"}
      </Button>
      {errorMessage ? <p className="text-right text-xs text-red-600">{errorMessage}</p> : null}
    </div>
  )
}
