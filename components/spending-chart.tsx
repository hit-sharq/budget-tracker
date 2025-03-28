"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"

interface SpendingChartProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SpendingChart({ className, ...props }: SpendingChartProps) {
  // This would be fetched from your API in a real application
  const data = [
    {
      name: "Jan",
      expenses: 2400,
      income: 4000,
    },
    {
      name: "Feb",
      expenses: 1398,
      income: 3000,
    },
    {
      name: "Mar",
      expenses: 2800,
      income: 5000,
    },
    {
      name: "Apr",
      expenses: 3908,
      income: 4780,
    },
    {
      name: "May",
      expenses: 2800,
      income: 3890,
    },
    {
      name: "Jun",
      expenses: 2500,
      income: 4300,
    },
  ]

  return (
    <Card className={className} {...props}>
      <CardHeader>
        <CardTitle>Income vs. Expenses</CardTitle>
        <CardDescription>Monthly comparison of your income and expenses</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            income: {
              label: "Income",
              color: "hsl(var(--chart-1))",
            },
            expenses: {
              label: "Expenses",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="income" fill="var(--color-income)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="var(--color-expenses)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

