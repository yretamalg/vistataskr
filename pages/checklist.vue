<template>
  <div class="min-h-screen">
    <div class="w-full">
      <!-- Filtros -->
      <div class="w-full py-4 mb-6">
        <div class="max-w-[1100px] mx-auto">
          <ChecklistFilters 
            @update:branch="updateBranch"
            @update:date="updateDate"
            @reset="resetAllToggles"
            :can-reset="canReset"
          />
        </div>
      </div>

      <!-- Contenido principal con bordes redondeados -->
      <div class="max-w-[1100px] mx-auto px-4">
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <ChecklistHeader
            title="Nombre Checklist"
            duration="Indefinido"
          />
          
          <div class="grid grid-cols-1 gap-6 mt-6">
            <TaskItem
              v-for="task in tasksWithStates"
              :key="task.id"
              :task="task"
              :ref="(el) => { if (el) taskRefs[task.id] = el }"
              @update:status="(status) => updateTaskStatus(task.id, status)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Task, TaskState } from '~/types/task'
import { useToggleState } from '~/composables/useToggleState'

// Referencias a los componentes TaskItem
const taskRefs = ref<{ [key: string]: any }>({})

// Inicializar el estado de los toggles
const { toggleStates, canReset, updateTaskState, resetAllTasks } = useToggleState()

// Estado inicial de las tareas
const tasks = ref<Task[]>([
  {
    id: "202410080000002e",
    name: "Tempor lorem no est rebum",
    frequency: "1 vez al día",
    description: "Lorem ipsum dolor sit amet sanctus lorem sanctus diam feugait. Facer kasd aliquip labore sanctus sit gubergren gubergren.",
    state: "neutral" as TaskState
  },
  {
    id: "202410090000003e",
    name: "Kasd consequat lorem amet.",
    frequency: "1 vez al día",
    description: "Et exerci ut sed facilisis. Diam aliquam consetetur no nonumy labore no sit consetetur et vero. Accusam ipsum tempor tation lorem rebum mazim blandit.",
    state: "neutral" as TaskState
  },
  {
    id: "202410100000003e",
    name: "Dolore nisl gubergren accusam.",
    frequency: "1 vez al día",
    description: "Lorem aliquam sed dolor veniam eirmod hendrerit et labore erat sed ipsum dolor accusam accusam lorem justo sed et. Ut aliquam et aliquyam.",
    state: "neutral" as TaskState
  },
  {
    id: "202410110000003e",
    name: "Laoreet zzril magna facilisis",
    frequency: "1 vez al día",
    description: "Dolore autem vulputate. Feugiat nihil et kasd consetetur dolor sit veniam invidunt vel. Et velit ipsum ipsum lorem et ea et suscipit. Kasd amet dolore dolore placerat.",
    state: "neutral" as TaskState
  },
  {
    id: "202410120000003e",
    name: "Eirmod erat dolor sit consequat.",
    frequency: "1 vez al día",
    description: "Rebum sit duo et molestie. Augue sea tempor gubergren nisl takimata lorem dolore dolores est. Amet et et justo takimata eleifend diam diam sit",
    state: "neutral" as TaskState
  }
])

// Combinar tareas con estados
const tasksWithStates = computed(() => {
  return tasks.value.map(task => {
    const stateConfig = toggleStates.value.tasks.find(t => t.id === task.id)
    if (stateConfig) {
      return {
        ...task,
        state: stateConfig.currentState as TaskState,
        isLocked: stateConfig.isLocked === 1
      }
    }
    return task
  })
})

// Función para actualizar el estado de una tarea
const updateTaskStatus = async (taskId: string, status: TaskState) => {
  updateTaskState(taskId, status)
}

// Funciones de actualización para filtros
const updateBranch = (branch: string) => {
  console.log('Selected branch:', branch)
}

const updateDate = (date: string) => {
  console.log('Selected date:', date)
}

// Resetear todos los toggles
const resetAllToggles = () => {
  if (canReset.value) {
    resetAllTasks()
    Object.values(taskRefs.value).forEach((ref) => {
      if (ref && typeof ref.reset === 'function') {
        ref.reset()
      }
    })
  }
}
</script>