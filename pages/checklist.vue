<!-- pages/checklist.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <div class="mx-auto max-w-[1100px] px-4">
      <!-- Encabezado del Checklist -->
      <div class="bg-white rounded p-4 mb-4">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-cyan-500 text-xl font-medium">Nombre Checklist</h1>
            <p class="text-gray-500">Duración: Indefinido</p>
          </div>
          <div class="flex gap-8">
            <span class="font-medium">Estado</span>
            <span class="font-medium">Evidencia</span>
          </div>
        </div>
      </div>

      <!-- Filtros -->
      <div class="flex justify-between items-center mb-4">
        <div class="flex gap-4">
          <select class="border rounded px-3 py-2 w-64">
            <option value="">Sucursal</option>
          </select>
          <input 
            type="date" 
            value="2024-10-07" 
            class="border rounded px-3 py-2" 
          />
        </div>
        <button class="text-cyan-500">
          <i class="fas fa-search"></i>
        </button>
      </div>

      <!-- Lista de tareas -->
      <div class="bg-white rounded p-6">
        <div class="border-b pb-4 mb-6">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-3">
              <h2 class="font-medium">Tareas</h2>
            </div>
            <div class="col-span-5">
              <span class="text-gray-500">Descripción tareas</span>
            </div>
            <div class="col-span-2 text-center">
              <span class="font-medium">Cumplimiento</span>
            </div>
            <div class="col-span-2 text-right">
              <span class="font-medium">Agregar Imágenes o Comentarios</span>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div v-for="task in tasks" :key="task.id" class="grid grid-cols-12 gap-4 items-center bg-white rounded p-4 shadow-sm">
            <div class="col-span-3">
              <h3 class="font-medium">{{ task.name }}</h3>
              <p class="text-sm text-gray-500">{{ task.frequency }}</p>
              <p class="text-sm text-gray-500">ID: {{ task.id }}</p>
            </div>
            <div class="col-span-5">
              <p class="text-gray-600">{{ task.description }}</p>
            </div>
            <div class="col-span-2 flex justify-center">
              <TaskToggle
                v-model="task.status"
                @update:modelValue="(newStatus) => updateTaskStatus(task.id, newStatus)"
              />
            </div>
            <div class="col-span-2 flex justify-end gap-2">
              <button class="w-10 h-10 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 flex items-center justify-center">
                <i class="fas fa-image"></i>
              </button>
              <button class="w-10 h-10 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 flex items-center justify-center">
                <i class="fas fa-comment"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskToggle from '~/components/ui/TaskToggle.vue'

type ToggleState = 'completed' | 'neutral' | 'failed'

interface Task {
  id: string
  name: string
  frequency: string
  description: string
  status: ToggleState
}

definePageMeta({
  layout: 'default'
})

const tasks = ref<Task[]>([
  {
    id: '202410070000002e',
    name: 'Nombre Tarea',
    frequency: '1 vez al día',
    description: 'Verificar el aseo de cajas, pasillos y Mostradores',
    status: 'neutral'
  },
  {
    id: '202410070000003e',
    name: 'Nombre Tarea',
    frequency: '1 vez al día',
    description: 'Verificar el aseo de cajas, pasillos y Mostradores',
    status: 'neutral'
  },
  {
    id: '202410070000004e',
    name: 'Nombre Tarea',
    frequency: '1 vez al día',
    description: 'Verificar el aseo de cajas, pasillos y Mostradores',
    status: 'neutral'
  },
  {
    id: '202410070000005e',
    name: 'Nombre Tarea',
    frequency: '1 vez al día',
    description: 'Verificar el aseo de cajas, pasillos y Mostradores',
    status: 'neutral'
  }
])

const updateTaskStatus = (taskId: string, newStatus: ToggleState) => {
  const task = tasks.value.find(t => t.id === taskId)
  if (task) {
    task.status = newStatus
  }
}
</script>