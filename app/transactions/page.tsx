import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { TransactionsTable } from "@/components/transactions-table"

export const metadata: Metadata = {
  title: "Budget Tracker | Transactions",
  description: "Manage your transactions",
}

export default function TransactionsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Transactions" text="View and manage all your financial transactions." />
      <TransactionsTable />
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>© 2024 Budget Tracker by Joshua</p>
      </div>
    </DashboardShell>
  )
}

