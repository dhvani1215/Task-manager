"use client"

import type React from "react"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateTask } from "@/lib/features/tasks/tasksSlice"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { AppDispatch } from "@/lib/store"
import type { Task } from "@/lib/features/tasks/types"

interface TaskEditFormProps {
  task: Task
  onCancel: () => void
}

export default function TaskEditForm({ task, onCancel }: TaskEditFormProps) {
  const [title, setTitle] = useState(task.title)
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      dispatch(updateTask({ id: task.id, changes: { title } }))
      onCancel()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full space-x-2">
      <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="flex-1" autoFocus />
      <Button type="submit" size="sm">
        Save
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  )
}

