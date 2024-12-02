<template>
  <header class="sticky top-0 bg-white border-b z-50 w-full">
    <!-- Fondo completo con contenedor limitado -->
    <div class="max-w-[1100px] mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <img src="/taskr_logo.svg" alt="TASKR Logo" class="h-10 w-auto" />
          </NuxtLink>
        </div>

        <!-- Company Name - Center -->
        <div class="hidden md:flex items-center justify-center flex-grow">
          <h1 class="text-xl font-bold text-gray-800">Nombre Empresa</h1>
        </div>

        <!-- User Profile -->
        <div class="flex items-center gap-3">
          <span class="text-gray-600 hidden md:inline">Mi Perfil</span>
          <div class="w-8 h-8 bg-teal-100 rounded-full"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>