<template>
  <div class="w-full py-2">
    <div class="max-w-[1100px] mx-auto px-4">
      <div class="flex justify-between items-center">
        <!-- Left side navigation buttons -->
        <div class="flex gap-2">
          <button 
            v-for="(button, index) in navigationButtons" 
            :key="index"
            class="px-6 py-2 bg-[#00A4B9] text-white rounded-full hover:bg-[#008C9E] transition-colors flex items-center gap-2 text-sm"
          >
            <i v-if="button.icon" :class="button.icon" class="text-base"></i>
            {{ button.text }}
          </button>
        </div>

        <!-- Center - Reset Button -->
        <button 
          @click="$emit('reset')"
          :disabled="!canReset"
          class="px-6 py-2 rounded-full flex items-center gap-2 text-sm transition-colors"
          :class="[
            canReset 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          ]"
        >
          <i class="fas fa-undo text-base"></i>
          Resetear estados
        </button>

        <!-- Right side filters -->
        <div class="flex gap-4 items-center">
          <select v-model="selectedBranch" class="border rounded px-3 py-2 w-64 bg-white rounded-xl">
            <option value="">Sucursal</option>
            <option value="1">Sucursal 1</option>
            <option value="2">Sucursal 2</option>
            <option value="3">Sucursal 3</option>
            <option value="4">Sucursal 4</option>
            <option value="5">Sucursal 5</option>
            <option value="6">Sucursal 6</option>
          </select>
          <input 
            type="date" 
            v-model="selectedDate" 
            class="border rounded-xl px-3 py-2 bg-white" 
          />
          <button class="text-[#00A4B9] px-2">
            <i class="fas fa-search text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  canReset: boolean
}>()

const selectedBranch = ref('')
const selectedDate = ref('2024-10-07')

const navigationButtons = [
  { text: 'Inicio', route: '/' },
  { text: 'Ir a Cumplimiento', route: '/cumplimiento' },
  { text: 'Atrás', route: '/checklist', icon: 'fas fa-arrow-left' }
]

defineEmits(['update:branch', 'update:date', 'reset'])
</script>

<style scoped>
input[type="date"] {
  min-width: 150px;
}
</style>