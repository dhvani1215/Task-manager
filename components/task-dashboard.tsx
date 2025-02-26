"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Provider } from "react-redux"
import { store } from "@/lib/store"
import { fetchTasks } from "@/lib/features/tasks/tasksSlice"
import TaskList from "@/components/task-list"
import TaskForm from "@/components/task-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { AppDispatch, RootState } from "@/lib/store"

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>()
  const { status, error } = useSelector((state: RootState) => state.tasks)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTasks())
    }
  }, [status, dispatch])

  return (
    <Card className="w-full max-w-4xl mx-auto border-none shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-purple-500/10">
        <CardTitle className="text-2xl">Task Management</CardTitle>
        <CardDescription>Manage your tasks efficiently with this simple task management system.</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 rounded-lg">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              All Tasks
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Active
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Completed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <TaskForm />
            <TaskList filter="all" />
          </TabsContent>
          <TabsContent value="active">
            <TaskForm />
            <TaskList filter="active" />
          </TabsContent>
          <TabsContent value="completed">
            <TaskList filter="completed" />
          </TabsContent>
        </Tabs>

        {status === "loading" && <p className="text-center mt-4">Loading tasks...</p>}
        {status === "failed" && <p className="text-center mt-4 text-red-500">Error: {error}</p>}
      </CardContent>
    </Card>
  )
}

export default function TaskDashboard() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  )
}

