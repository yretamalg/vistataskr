<template>
  <div class="bg-white rounded-lg border-2 p-4 transition-colors duration-200"
    :class="{
      'border-gray-200': localState === 'neutral',
      'border-green-500': localState === 'completed',
      'border-red-500': localState === 'failed'
    }"
  >
    <div class="flex justify-between items-center min-h-[5rem]">
      <div class="flex-1">
        <!-- Contenedor flex con alineación vertical central -->
        <div class="flex gap-0 items-center h-full">
          <!-- Nombre truncado con ancho fijo -->
          <div class="w-64 shrink-0">
            <h3 class="font-medium">{{ truncatedName }}</h3>
            <!-- Información adicional -->
            <div class="mt-1">
              <p class="text-sm text-gray-500">{{ task?.frequency || 'Sin frecuencia' }}</p>
              <p class="text-sm text-gray-500">ID: {{ task?.id || 'Sin ID' }}</p>
            </div>
          </div>
          <!-- Descripción truncada, centrada verticalmente -->
          <p class="text-gray-600 flex-1 self-center">
            {{ truncatedDescription }}
          </p>
        </div>
      </div>
      <!-- Columna Estado y Evidencia con espaciado aumentado -->
      <div class="flex items-center gap-16">
        <!-- Contenedor para el toggle con ancho fijo y centrado absoluto -->
        <div class="w-20 relative flex justify-center items-center">
          <TaskToggle 
            v-model="localState"
            :is-locked="isLocked"
            ref="toggleRef"
          />
        </div>
        <!-- Contenedor para los botones de evidencia -->
        <div class="w-20 flex justify-center gap-2">
          <button class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors">
            <i class="fas fa-image text-white"></i>
          </button>
          <button class="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center hover:bg-teal-600 transition-colors">
            <i class="fas fa-comment text-white"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Task } from '~/types/task'
import TaskToggle from '~/components/ui/TaskToggle.vue'
import type { ToggleState } from '~/components/ui/TaskToggle.vue'

const props = defineProps<{
  task: Task
}>()

const emit = defineEmits(['update:status'])

const toggleRef = ref()
const localState = ref<ToggleState>((props.task?.state as ToggleState) || 'neutral')
const isLocked = ref(false)

// Computar el nombre truncado
const truncatedName = computed(() => {
  if (!props.task?.name) return 'Sin nombre'
  return props.task.name.length > 25 
    ? props.task.name.substring(0, 25) + '...'
    : props.task.name
})

// Computar la descripción truncada
const truncatedDescription = computed(() => {
  if (!props.task?.description) return 'Sin descripción'
  return props.task.description.length > 140
    ? props.task.description.substring(0, 140) + '...'
    : props.task.description
})

// Observar cambios en el estado de la tarea
watch(() => props.task.state, (newState) => {
  if (newState) {
    localState.value = newState as ToggleState
  }
})

// Observar cambios en el estado local
watch(localState, (newValue) => {
  emit('update:status', newValue)
  isLocked.value = newValue !== 'neutral'
})

// Método para resetear el toggle
const reset = () => {
  if (toggleRef.value) {
    localState.value = 'neutral'
    isLocked.value = false
  }
}

// Exponer el método reset
defineExpose({ reset })
</script>