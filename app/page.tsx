import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Overview } from "@/components/overview"
import { RecentTransactions } from "@/components/recent-transactions"
import { BudgetProgress } from "@/components/budget-progress"
import { SpendingChart } from "@/components/spending-chart"

export const metadata: Metadata = {
  title: "Budget Tracker | Dashboard",
  description: "Manage your finances with ease",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Welcome back! Here's an overview of your finances." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Overview />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <SpendingChart className="col-span-4" />
        <BudgetProgress className="col-span-3" />
      </div>
      <div className="mt-4">
        <RecentTransactions />
      </div>
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>© 2024 Budget Tracker by Joshua</p>
      </div>
    </DashboardShell>
  )
}

