"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { PlusIcon, AlertTriangle, CheckCircle, Edit2Icon } from "lucide-react"
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

export function BudgetCategories() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)

  // This would be fetched from your API in a real application
  const categories = [
    {
      id: "1",
      name: "Housing",
      spent: 1200,
      budget: 1500,
      percentage: 80,
    },
    {
      id: "2",
      name: "Food",
      spent: 450,
      budget: 500,
      percentage: 90,
    },
    {
      id: "3",
      name: "Transportation",
      spent: 200,
      budget: 300,
      percentage: 67,
    },
    {
      id: "4",
      name: "Entertainment",
      spent: 150,
      budget: 200,
      percentage: 75,
    },
    {
      id: "5",
      name: "Utilities",
      spent: 300,
      budget: 350,
      percentage: 86,
    },
    {
      id: "6",
      name: "Healthcare",
      spent: 100,
      budget: 250,
      percentage: 40,
    },
    {
      id: "7",
      name: "Shopping",
      spent: 300,
      budget: 300,
      percentage: 100,
    },
    {
      id: "8",
      name: "Education",
      spent: 50,
      budget: 150,
      percentage: 33,
    },
  ]

  const handleEditClick = (category) => {
    setEditingCategory(category)
    setIsEditDialogOpen(true)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Budget Categories</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Budget Category</DialogTitle>
              <DialogDescription>Create a new budget category and set a monthly limit</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category-name" className="text-right">
                  Category Name
                </Label>
                <Input id="category-name" placeholder="e.g., Groceries" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="budget-amount" className="text-right">
                  Monthly Budget
                </Label>
                <Input id="budget-amount" type="number" placeholder="0.00" className="col-span-3" />
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>{category.name}</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => handleEditClick(category)}>
                  <Edit2Icon className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>
                ${category.spent.toFixed(2)} of ${category.budget.toFixed(2)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress
                  value={category.percentage}
                  className={`h-2 ${
                    category.percentage >= 100
                      ? "bg-red-200"
                      : category.percentage > 75
                        ? "bg-yellow-200"
                        : "bg-green-200"
                  }`}
                />
                <div className="flex justify-between text-sm">
                  <span>{category.percentage}% used</span>
                  <span>${(category.budget - category.spent).toFixed(2)} remaining</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-1">
              {category.percentage >= 100 ? (
                <div className="flex items-center text-red-500 text-sm">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  Budget exceeded
                </div>
              ) : category.percentage > 75 ? (
                <div className="flex items-center text-yellow-500 text-sm">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  Approaching limit
                </div>
              ) : (
                <div className="flex items-center text-green-500 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Within budget
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      {editingCategory && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Budget: {editingCategory.name}</DialogTitle>
              <DialogDescription>Update your budget limit for this category</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-category-name" className="text-right">
                  Category Name
                </Label>
                <Input id="edit-category-name" defaultValue={editingCategory.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="edit-budget-amount" className="text-right">
                  Monthly Budget
                </Label>
                <Input
                  id="edit-budget-amount"
                  type="number"
                  defaultValue={editingCategory.budget}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" onClick={() => setIsEditDialogOpen(false)}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

