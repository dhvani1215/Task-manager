import { ClipboardList } from "lucide-react"

interface EmptyStateProps {
  message: string
  description?: string
}

export default function EmptyState({ message, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 animate-pulse-slow">
        <ClipboardList className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{message}</h3>
      {description && <p className="text-gray-600 dark:text-gray-300 max-w-md">{description}</p>}
    </div>
  )
}

