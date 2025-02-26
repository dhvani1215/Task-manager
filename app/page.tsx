import TaskDashboard from "@/components/task-dashboard"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import { CheckCircle, ListTodo, Clock } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ListTodo className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">TaskFlow</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Task Management Simplified
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
                Organize your tasks with ease
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A simple yet powerful task management system to help you stay organized and productive.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-200">Easy to use</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-200">Responsive design</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-200">Dark mode support</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-purple-600 opacity-30 blur"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Task Management"
                  className="relative rounded-lg shadow-xl dark:shadow-primary/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <TaskDashboard />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ListTodo className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Task Organization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create, edit, and organize your tasks with an intuitive interface.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Task Completion</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mark tasks as complete and track your progress over time.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Task Filtering</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Filter tasks by status to focus on what matters most right now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <ListTodo className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">TaskFlow</span>
            </div>
            <div className="text-slate-400 text-sm">© {new Date().getFullYear()} TaskFlow. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  )
}

