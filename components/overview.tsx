"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon, DollarSign, PiggyBank } from "lucide-react"

export function Overview() {
  // This would be fetched from your API in a real application
  const stats = [
    {
      title: "Total Income",
      value: "$4,250.00",
      icon: ArrowUpIcon,
      description: "+20.1% from last month",
      trend: "positive",
    },
    {
      title: "Total Expenses",
      value: "$2,850.00",
      icon: ArrowDownIcon,
      description: "+10.5% from last month",
      trend: "negative",
    },
    {
      title: "Remaining Budget",
      value: "$1,400.00",
      icon: DollarSign,
      description: "35% of income remaining",
      trend: "neutral",
    },
    {
      title: "Savings",
      value: "$850.00",
      icon: PiggyBank,
      description: "20% of income saved",
      trend: "positive",
    },
  ]

  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon
              className={`h-4 w-4 ${
                stat.trend === "positive"
                  ? "text-green-500"
                  : stat.trend === "negative"
                    ? "text-red-500"
                    : "text-gray-500"
              }`}
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p
              className={`text-xs ${
                stat.trend === "positive"
                  ? "text-green-500"
                  : stat.trend === "negative"
                    ? "text-red-500"
                    : "text-gray-500"
              }`}
            >
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

