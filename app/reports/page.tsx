import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { FinancialReports } from "@/components/financial-reports"

export const metadata: Metadata = {
  title: "Budget Tracker | Reports",
  description: "View your financial reports and analytics",
}

export default function ReportsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Reports & Analytics" text="Visualize your financial data and track your progress." />
      <FinancialReports />
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>© 2024 Budget Tracker by Joshua</p>
      </div>
    </DashboardShell>
  )
}

