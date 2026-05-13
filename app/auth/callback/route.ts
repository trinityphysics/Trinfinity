import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

import { createClient } from "@/utils/supabase/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  if (!code) {
    return NextResponse.redirect(new URL("/login?error=missing_code", request.url))
  }

  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  if (!supabase) {
    return NextResponse.redirect(new URL("/login?error=supabase_not_configured", request.url))
  }

  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    console.error("Failed to exchange auth code for session", error)
    return NextResponse.redirect(new URL("/login?error=invalid_code", request.url))
  }

  return NextResponse.redirect(new URL("/todos", request.url))
}
