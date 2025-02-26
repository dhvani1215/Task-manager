export interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: string
}

export interface TasksState {
  tasks: Task[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

