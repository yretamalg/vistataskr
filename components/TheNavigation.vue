<template>
  <header class="sticky top-0 bg-white border-b z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo SVG & Text -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <svg class="h-10 w-auto" viewBox="0 0 347.2 71.7" xmlns="http://www.w3.org/2000/svg">
              <!-- SVG paths... mantén los mismos paths que tenías -->
            </svg>
          </NuxtLink>
        </div>
        
        <!-- Navigation Menu -->
        <nav class="hidden md:flex items-center space-x-4">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.text"
            :to="item.route"
            class="px-6 py-2 rounded-full text-gray-600 hover:bg-teal-50 hover:text-teal-500 transition-colors font-medium"
            :class="{ 'bg-teal-500 text-white hover:bg-teal-600 hover:text-white': isCurrentRoute(item.route) }"
          >
            {{ item.text }}
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <i class="fas fa-bars text-gray-600"></i>
        </button>

        <!-- User Profile -->
        <div class="hidden md:flex items-center gap-3">
          <span class="text-gray-600">Mi Perfil</span>
          <div class="w-8 h-8 bg-teal-100 rounded-full"></div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="isMenuOpen" 
        class="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg"
      >
        <div class="container mx-auto px-4 py-2">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.text"
            :to="item.route"
            class="block px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-500 rounded-lg"
            :class="{ 'bg-teal-500 text-white hover:bg-teal-600 hover:text-white': isCurrentRoute(item.route) }"
            @click="isMenuOpen = false"
          >
            {{ item.text }}
          </NuxtLink>
          <div class="flex items-center gap-3 px-4 py-2 border-t mt-2">
            <span class="text-gray-600">Mi Perfil</span>
            <div class="w-8 h-8 bg-teal-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navigationItems = [
  { text: 'Inicio', route: '/' },
  { text: 'Ir a Cumplimiento', route: '/cumplimiento' },
  { text: 'Checklist', route: '/checklist' }
]

const isCurrentRoute = (path: string) => {
  return route.path === path
}
</script>