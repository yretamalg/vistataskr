<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <TheHeader />
    <div class="py-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
</script>