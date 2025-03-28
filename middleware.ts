import { NextResponse } from "next/server"
import { auth } from "./auth"

export default auth((req) => {
  const { nextUrl, auth } = req
  const isLoggedIn = !!auth?.user
  const isAuthPage = nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register")
  const isProtectedPage =
    nextUrl.pathname.startsWith("/settings") ||
    nextUrl.pathname.startsWith("/transactions") ||
    nextUrl.pathname.startsWith("/budgets") ||
    nextUrl.pathname.startsWith("/reports") ||
    nextUrl.pathname === "/"

  // Redirect to login if accessing protected page while not logged in
  if (isProtectedPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl))
  }

  // Redirect to dashboard if accessing auth pages while logged in
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl))
  }

  return NextResponse.next()
})

// Required for the middleware to work
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - API routes (/api/*)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

