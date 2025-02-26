"use client"

import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "@/lib/store"
import { toggleTask, deleteTask } from "@/lib/features/tasks/tasksSlice"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash, Edit } from "lucide-react"
import { useState } from "react"
import TaskEditForm from "@/components/task-edit-form"
import EmptyState from "@/components/empty-state"

interface TaskListProps {
  filter: "all" | "active" | "completed"
}

export default function TaskList({ filter }: TaskListProps) {
  const tasks = useSelector((state: RootState) => state.tasks.tasks)
  const dispatch = useDispatch<AppDispatch>()
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null)

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const handleToggle = (id: string) => {
    dispatch(toggleTask(id))
  }

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id))
  }

  const handleEdit = (id: string) => {
    setEditingTaskId(id)
  }

  if (filteredTasks.length === 0) {
    return (
      <EmptyState
        message="No tasks found"
        description={
          filter !== "all"
            ? "Try switching to a different tab or add a new task."
            : "Add your first task to get started!"
        }
      />
    )
  }

  return (
    <div className="space-y-4 mt-6">
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all animate-fadeIn"
          style={{
            animation: `fadeIn 0.3s ease-in-out`,
            animationFillMode: "both",
          }}
        >
          {editingTaskId === task.id ? (
            <TaskEditForm task={task} onCancel={() => setEditingTaskId(null)} />
          ) : (
            <>
              <div className="flex items-center space-x-3">
                <Checkbox
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onCheckedChange={() => handleToggle(task.id)}
                  className={`${task.completed ? "bg-green-500 text-white border-green-500" : ""}`}
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={`text-sm font-medium transition-all ${
                    task.completed
                      ? "line-through text-gray-500 dark:text-gray-400"
                      : "text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {task.title}
                </label>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEdit(task.id)}
                  aria-label="Edit task"
                  className="hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(task.id)}
                  aria-label="Delete task"
                  className="hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

