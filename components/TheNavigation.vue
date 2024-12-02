<template>
  <nav class="bg-white px-4 py-3">
    <div class="flex gap-2">
      <NuxtLink 
        v-for="item in navigationItems" 
        :key="item.text"
        :to="item.route"
        class="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600"
      >
        {{ item.text }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navigationItems = [
  { text: 'Inicio', route: '/' },
  { text: 'Ir a Cumplimiento', route: '/cumplimiento' },
  { text: 'Checklist', route: '/checklist' }
]
</script>