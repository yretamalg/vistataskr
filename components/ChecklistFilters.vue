<template>
  <div class="flex justify-between items-center mb-4">
    <div class="flex gap-4">
      <select v-model="selectedBranch" class="border rounded px-3 py-2 w-64">
        <option value="">Sucursal</option>
      </select>
      <input 
        type="date" 
        v-model="selectedDate" 
        class="border rounded px-3 py-2" 
      />
    </div>
    <button class="text-teal-500">
      <i class="fas fa-calendar"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
const selectedBranch = ref('')
const selectedDate = ref('2024-10-07')

defineEmits(['update:branch', 'update:date'])
</script>
