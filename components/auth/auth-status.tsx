import { auth } from "@/auth"

export async function AuthStatus() {
  const session = await auth()

  return (
    <div className="text-sm font-medium">
      {session?.user?.name ? <p>Signed in as {session.user.name}</p> : <p>Not signed in</p>}
    </div>
  )
}

