"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/utils/supabase/client"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage("")
    setSuccessMessage("")
    setIsSubmitting(true)

    const supabase = createClient()

    if (!supabase) {
      setErrorMessage("Supabase auth is not configured. Please set the required environment variables.")
      setIsSubmitting(false)
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setErrorMessage(error.message)
      setIsSubmitting(false)
      return
    }

    setSuccessMessage("Account created. Check your email to finish signup.")
    setIsSubmitting(false)
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-4 py-12">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>Sign up with your email and password.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={6}
                autoComplete="new-password"
              />
            </div>

            {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
            {successMessage ? <p className="text-sm text-green-600">{successMessage}</p> : null}

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <p className="mt-4 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link className="underline" href="/login">
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
