"use client"

import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import type { Task, TasksState } from "./types"
import { fetchTasksApi, addTaskApi, updateTaskApi, deleteTaskApi } from "@/lib/api/tasks"

const initialState: TasksState = {
  tasks: [],
  status: "idle",
  error: null,
}

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetchTasksApi()
  return response
})

export const addTask = createAsyncThunk("tasks/addTask", async (title: string) => {
  const newTask: Task = {
    id: uuidv4(),
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  }
  await addTaskApi(newTask)
  return newTask
})

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ id, changes }: { id: string; changes: Partial<Task> }) => {
    await updateTaskApi(id, changes)
    return { id, changes }
  },
)

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id: string) => {
  await deleteTaskApi(id)
  return id
})

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.tasks = action.payload
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to fetch tasks"
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload)
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const { id, changes } = action.payload
        const taskIndex = state.tasks.findIndex((task) => task.id === id)
        if (taskIndex !== -1) {
          state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...changes }
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      })
  },
})

export const { toggleTask } = tasksSlice.actions
export default tasksSlice.reducer

