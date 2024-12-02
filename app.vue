<template>
  <div class="min-h-screen bg-zinc-300 font-sans">
    <TheHeader />
    <main class="container mx-auto px-4 py-6">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
// Importar el CSS global
import '~/assets/css/main.css'
</script>