<!-- components/TaskItem.vue -->
<template>
  <div class="grid grid-cols-12 gap-4 items-center bg-white rounded p-4 shadow-sm">
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
        v-model="taskStatus"
        @update:modelValue="updateStatus"
      />
    </div>
    <div class="col-span-2 flex justify-end gap-2">
      <button class="p-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600">
        <i class="fas fa-image"></i>
      </button>
      <button class="p-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600">
        <i class="fas fa-comment"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Task } from '~/types/task'

const props = defineProps<{
  task: Task
}>();

const emit = defineEmits<{
  'update:status': [string]
}>();

type ToggleState = 'completed' | 'neutral' | 'failed';

const taskStatus = ref<ToggleState>('neutral');

const updateStatus = (newStatus: ToggleState) => {
  taskStatus.value = newStatus;
  emit('update:status', newStatus);
};
</script>