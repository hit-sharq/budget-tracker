import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BudgetCategories } from "@/components/budget-categories"

export const metadata: Metadata = {
  title: "Budget Tracker | Budgets",
  description: "Manage your budgets",
}

export default function BudgetsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Budgets" text="Set and manage your monthly budget limits." />
      <BudgetCategories />
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>© 2024 Budget Tracker by Joshua</p>
      </div>
    </DashboardShell>
  )
}

