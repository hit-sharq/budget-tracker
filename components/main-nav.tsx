"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, CreditCard, DollarSign, Home, PiggyBank, Settings } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/transactions",
      label: "Transactions",
      icon: CreditCard,
      active: pathname === "/transactions",
    },
    {
      href: "/budgets",
      label: "Budgets",
      icon: DollarSign,
      active: pathname === "/budgets",
    },
    {
      href: "/reports",
      label: "Reports",
      icon: BarChart3,
      active: pathname === "/reports",
    },
    {
      href: "/savings",
      label: "Savings",
      icon: PiggyBank,
      active: pathname === "/savings",
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/settings",
    },
  ]

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <DollarSign className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">Budget Tracker</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              route.active ? "text-primary" : "text-muted-foreground",
            )}
          >
            <route.icon className="mr-2 h-4 w-4" />
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

