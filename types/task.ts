// types/task.ts
export type TaskStatus = 'completed' | 'neutral' | 'failed';

export interface Task {
  id: string;
  name: string;
  frequency: string;
  description: string;
  status: TaskStatus;
}