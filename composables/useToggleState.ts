import { ref, computed } from 'vue'
import type { TaskState } from '~/types/task'

interface ToggleStateTask {
  id: string
  isLocked: number
  currentState: TaskState
}

interface ToggleStates {
  canReset: number
  lastUpdate: string
  tasks: ToggleStateTask[]
}

const initialToggleStates: ToggleStates = {
  canReset: 0,
  lastUpdate: "2024-12-02T10:00:00",
  tasks: [
    {
      id: "202410080000002e",
      isLocked: 0,
      currentState: "neutral"
    },
    {
      id: "202410090000003e",
      isLocked: 0,
      currentState: "neutral"
    },
    {
      id: "202410100000003e",
      isLocked: 0,
      currentState: "neutral"
    },
    {
      id: "202410110000003e",
      isLocked: 0,
      currentState: "neutral"
    },
    {
      id: "202410120000003e",
      isLocked: 0,
      currentState: "neutral"
    }
  ]
}

export function useToggleState() {
  const toggleStates = ref<ToggleStates>(initialToggleStates)
  
  const canReset = computed(() => {
    return toggleStates.value.tasks.some(task => 
      task.currentState !== 'neutral' || task.isLocked === 1
    )
  })
  
  function getTaskState(taskId: string) {
    return toggleStates.value.tasks.find(t => t.id === taskId)
  }
  
  function updateTaskState(taskId: string, newState: TaskState) {
    const task = toggleStates.value.tasks.find(t => t.id === taskId)
    if (task) {
      task.currentState = newState
      task.isLocked = newState !== 'neutral' ? 1 : 0
    }
  }
  
  function resetAllTasks() {
    if (canReset.value) {
      toggleStates.value.tasks.forEach(task => {
        task.currentState = 'neutral'
        task.isLocked = 0 // Aseguramos que se desbloquee después del reset
      })
      toggleStates.value.lastUpdate = new Date().toISOString()
    }
  }

  return {
    toggleStates,
    canReset,
    getTaskState,
    updateTaskState,
    resetAllTasks
  }
}