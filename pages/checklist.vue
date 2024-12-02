<template>
  <div class="min-h-screen">
    <div class="w-full">
      <!-- Filtros -->
      <div class="w-full py-8 mb-6">
        <div class="max-w-[1100px] mx-auto">
          <ChecklistFilters 
            @update:branch="updateBranch"
            @update:date="updateDate"
          />
        </div>
      </div>

      <!-- Contenido principal con bordes redondeados -->
      <div class="max-w-[1100px] mx-auto ">
        <div class="bg-white rounded-xl p-6 shadow-2xl">
          <ChecklistHeader
            title="Nombre Checklist"
            duration="Indefinido"
          />
          
          <div class="grid grid-cols-1 gap-6 mt-6">
            <TaskItem
              v-for="task in tasks"
              :key="task.id"
              :task="task"
              @update:status="updateTaskStatus"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Task, TaskState } from '~/types/task'

// Inicializar tasks con datos
const tasks = ref<Task[]>([
  {
    id: '202410070000002e',
    name: 'Verificar el aseo de cajas',
    frequency: '1 vez al día',
    description: 'Verificar el aseo de cajas, pasillos y Mostradores',
    state: 'neutral' as TaskState
  },
  {
    id: '202410070000003e',
    name: 'Revisar inventario',
    frequency: '1 vez al día',
    description: 'Realizar conteo de inventario disponible',
    state: 'neutral' as TaskState
  }
])

const updateTaskStatus = (status: TaskState) => {
  console.log('Status updated:', status)
}

const updateBranch = (branch: string) => {
  console.log('Selected branch:', branch)
}

const updateDate = (date: string) => {
  console.log('Selected date:', date)
}
</script>