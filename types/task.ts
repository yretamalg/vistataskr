export type TaskState = 'completed' | 'neutral' | 'failed'

export interface Task {
  id: string
  name: string
  frequency: string
  description: string
  state: TaskState
}