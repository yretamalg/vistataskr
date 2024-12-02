<template>
  <div class="bg-white rounded-lg border p-4 ">
    <div class="flex justify-between items-center">
      <div class="flex-1">
        <h3 class="font-medium">{{ task?.name || 'Sin nombre' }}</h3>
        <p class="text-sm text-gray-500">{{ task?.frequency || 'Sin frecuencia' }}</p>
        <p class="text-sm text-gray-500">ID: {{ task?.id || 'Sin ID' }}</p>
        <p class="mt-2">{{ task?.description || 'Sin descripción' }}</p>
      </div>
      <div class="flex items-center gap-4">
        <TaskToggle 
          v-model="localState"
        />
        <div class="flex gap-2">
          <button class="w-8 h-8 rounded-full bg-[#0096AF] flex items-center justify-center hover:bg-[#2bb2ca] transition-colors p-6">
            <i class="fas fa-image text-white p-5"></i>
          </button>
          <button class="w-8 h-8 rounded-full bg-[#0096AF] flex items-center justify-center hover:bg-[#2bb2ca] transition-colors p-6">
            <i class="fas fa-comment text-white p-5"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Task } from '~/types/task'
import TaskToggle, { type ToggleState } from '~/components/ui/TaskToggle.vue'

const props = defineProps<{
  task: Task
}>()

const emit = defineEmits<{
  'update:status': [ToggleState]
}>()

// Inicializar el estado local con un valor por defecto si task.state no está definido
const localState = ref<ToggleState>((props.task?.state as ToggleState) || 'neutral')

watch(localState, (newValue) => {
  emit('update:status', newValue)
})
</script>