import type { Metadata } from "next"
import Link from "next/link"
import { RegisterForm } from "@/components/register-form"

export const metadata: Metadata = {
  title: "Budget Tracker | Register",
  description: "Create a new account",
}

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your information to create an account</p>
        </div>
        <RegisterForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link href="/login" className="hover:text-brand underline underline-offset-4">
            Already have an account? Sign In
          </Link>
        </p>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Budget Tracker by Joshua</p>
        </div>
      </div>
    </div>
  )
}

