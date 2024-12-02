<!-- components/TheHeader.vue -->
<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-[1100px] mx-auto px-4">
      <!-- Header principal -->
      <div class="flex justify-between items-center py-2 border-b">
        <div class="flex items-center gap-2">
          <div class="flex gap-2 items-center">
            <img src="/images/taskr-logo.png" alt="TASKR" class="h-8" />
            <span class="text-cyan-500 text-xl font-bold">TASKR</span>
          </div>
        </div>
        
        <span class="text-cyan-500 text-xl">Nombre Empresa</span>
        
        <div class="flex items-center gap-2">
          <span class="text-cyan-500">Mi Perfil</span>
          <div class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
            <i class="fas fa-user text-cyan-500"></i>
          </div>
        </div>
      </div>

      <!-- Barra de navegación y filtros -->
      <div class="flex justify-between items-center py-3">
        <!-- Botones de navegación -->
        <div class="flex gap-2">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.text"
            :to="item.route"
            :class="[
              'px-8 py-2 rounded-full transition-colors',
              'flex items-center gap-2',
              item.text === 'Checklist' ? 'bg-cyan-500 text-white hover:bg-cyan-600' : 'bg-cyan-500 text-white hover:bg-cyan-600'
            ]"
          >
            <i v-if="item.icon" :class="['fas', item.icon]"></i>
            {{ item.text }}
          </NuxtLink>
        </div>

        <!-- Filtros -->
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <span>Sucursal</span>
            <select class="border rounded px-3 py-2 w-48">
              <option value="">Seleccionar</option>
            </select>
          </div>
          
          <div class="flex items-center gap-2">
            <span>Fecha</span>
            <input 
              type="date" 
              value="2024-10-07" 
              class="border rounded px-3 py-2" 
            />
          </div>

          <button class="p-2 text-cyan-500">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navigationItems = [
  { text: 'Inicio', route: '/', icon: 'fa-home' },
  { text: 'Ir a Cumplimiento', route: '/cumplimiento', icon: 'fa-check' },
  { text: 'Checklist', route: '/checklist', icon: 'fa-list-check' }
];
</script>