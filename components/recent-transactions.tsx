"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDownIcon, ArrowUpIcon, PlusIcon, SearchIcon } from "lucide-react"

export function RecentTransactions() {
  const [searchTerm, setSearchTerm] = useState("")

  // This would be fetched from your API in a real application
  const transactions = [
    {
      id: "1",
      date: "2023-06-01",
      description: "Salary Deposit",
      amount: 3500,
      type: "income",
      category: "Salary",
    },
    {
      id: "2",
      date: "2023-06-02",
      description: "Rent Payment",
      amount: 1200,
      type: "expense",
      category: "Housing",
    },
    {
      id: "3",
      date: "2023-06-03",
      description: "Grocery Shopping",
      amount: 150,
      type: "expense",
      category: "Food",
    },
    {
      id: "4",
      date: "2023-06-05",
      description: "Freelance Work",
      amount: 750,
      type: "income",
      category: "Freelance",
    },
    {
      id: "5",
      date: "2023-06-07",
      description: "Utility Bills",
      amount: 200,
      type: "expense",
      category: "Utilities",
    },
  ]

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest financial activities</CardDescription>
          </div>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Transaction
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search transactions..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>
                  <Badge variant="outline">{transaction.category}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end">
                    {transaction.type === "income" ? (
                      <ArrowUpIcon className="mr-1 h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500" />
                    )}
                    <span className={transaction.type === "income" ? "text-green-500" : "text-red-500"}>
                      ${transaction.amount.toFixed(2)}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

