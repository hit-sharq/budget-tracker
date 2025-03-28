"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowDownIcon, ArrowUpIcon, FilterIcon, PlusIcon, SearchIcon, Trash2Icon, PencilIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export function TransactionsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

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
    {
      id: "6",
      date: "2023-06-10",
      description: "Restaurant Dinner",
      amount: 85,
      type: "expense",
      category: "Food",
    },
    {
      id: "7",
      date: "2023-06-15",
      description: "Bonus Payment",
      amount: 500,
      type: "income",
      category: "Salary",
    },
    {
      id: "8",
      date: "2023-06-18",
      description: "Gas Station",
      amount: 45,
      type: "expense",
      category: "Transportation",
    },
    {
      id: "9",
      date: "2023-06-20",
      description: "Movie Tickets",
      amount: 30,
      type: "expense",
      category: "Entertainment",
    },
    {
      id: "10",
      date: "2023-06-25",
      description: "Dividend Payment",
      amount: 120,
      type: "income",
      category: "Investments",
    },
  ]

  const categories = [...new Set(transactions.map((t) => t.category))]

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || transaction.category === categoryFilter
    const matchesType = typeFilter === "all" || transaction.type === typeFilter

    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>All Transactions</CardTitle>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                Add Transaction
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Transaction</DialogTitle>
                <DialogDescription>Enter the details of your new transaction</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="transaction-date" className="text-right">
                    Date
                  </Label>
                  <Input
                    id="transaction-date"
                    type="date"
                    className="col-span-3"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="transaction-type" className="text-right">
                    Type
                  </Label>
                  <Select defaultValue="expense">
                    <SelectTrigger id="transaction-type" className="col-span-3">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Income</SelectItem>
                      <SelectItem value="expense">Expense</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="transaction-description" className="text-right">
                    Description
                  </Label>
                  <Input id="transaction-description" placeholder="Enter description" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="transaction-amount" className="text-right">
                    Amount
                  </Label>
                  <Input id="transaction-amount" type="number" placeholder="0.00" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="transaction-category" className="text-right">
                    Category
                  </Label>
                  <Select defaultValue="Food">
                    <SelectTrigger id="transaction-category" className="col-span-3">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" onClick={() => setIsAddDialogOpen(false)}>
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col gap-4 sm:flex-row">
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
          <div className="flex gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <FilterIcon className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <FilterIcon className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
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
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="icon">
                      <PencilIcon className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2Icon className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
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

