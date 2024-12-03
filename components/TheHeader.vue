<template>
  <header class="sticky top-0 bg-white border-b z-50 w-full">
    <div class="max-w-[1100px] mx-auto px-4 h-16">
      <div class="flex items-center justify-between h-full">
        <!-- Logo -->
        <div class="flex items-center h-full">
          <NuxtLink to="/" class="flex items-center">
            <img src="/taskr_logo.svg" alt="TASKR Logo" class="h-10 w-auto" />
          </NuxtLink>
        </div>

        <!-- Company Name - Center -->
        <div class="hidden md:flex items-center justify-center flex-1">
          <h1 class="text-xl font-bold text-gray-800">Nombre Empresa</h1>
        </div>

        <!-- User Profile -->
        <div class="flex items-center gap-3 h-full">
          <span class="text-gray-600 hidden md:inline text-sm">Mi Perfil</span>
          <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
            <i class="fas fa-user text-teal-600"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// No necesitamos la variable isMenuOpen ya que no se usa
</script>