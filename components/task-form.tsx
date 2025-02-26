"use client"

import type React from "react"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "@/lib/features/tasks/tasksSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { AppDispatch } from "@/lib/store"

export default function TaskForm() {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      dispatch(addTask(title))
      setTitle("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 border-2 focus:border-primary focus:ring-primary"
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all"
      >
        Add Task
      </Button>
    </form>
  )
}

