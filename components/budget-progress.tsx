"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface BudgetProgressProps extends React.HTMLAttributes<HTMLDivElement> {}

export function BudgetProgress({ className, ...props }: BudgetProgressProps) {
  // This would be fetched from your API in a real application
  const categories = [
    {
      name: "Housing",
      spent: 1200,
      budget: 1500,
      percentage: 80,
    },
    {
      name: "Food",
      spent: 450,
      budget: 500,
      percentage: 90,
    },
    {
      name: "Transportation",
      spent: 200,
      budget: 300,
      percentage: 67,
    },
    {
      name: "Entertainment",
      spent: 150,
      budget: 200,
      percentage: 75,
    },
    {
      name: "Utilities",
      spent: 300,
      budget: 350,
      percentage: 86,
    },
  ]

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Budget Progress</CardTitle>
        <CardDescription>Track your spending against category budgets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">{category.name}</div>
                <div className="text-sm text-muted-foreground">
                  ${category.spent} / ${category.budget}
                </div>
              </div>
              <Progress
                value={category.percentage}
                className={`h-2 ${
                  category.percentage > 90 ? "bg-red-200" : category.percentage > 75 ? "bg-yellow-200" : "bg-green-200"
                }`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

