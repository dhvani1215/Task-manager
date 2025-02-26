import type { Task } from "@/lib/features/tasks/types"

// Simulated API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// In-memory storage for tasks (simulating a database)
let tasks: Task[] = [
  {
    id: "1",
    title: "Complete project documentation",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Review pull requests",
    completed: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Fix UI bugs in dashboard",
    completed: false,
    createdAt: new Date().toISOString(),
  },
]

// Simulated API endpoints
export const fetchTasksApi = async (): Promise<Task[]> => {
  await delay(500) // Simulate network delay
  return [...tasks]
}

export const addTaskApi = async (task: Task): Promise<Task> => {
  await delay(300)
  tasks.push(task)
  return task
}

export const updateTaskApi = async (id: string, changes: Partial<Task>): Promise<Task> => {
  await delay(300)
  const index = tasks.findIndex((task) => task.id === id)
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...changes }
    return tasks[index]
  }
  throw new Error("Task not found")
}

export const deleteTaskApi = async (id: string): Promise<void> => {
  await delay(300)
  tasks = tasks.filter((task) => task.id !== id)
}

