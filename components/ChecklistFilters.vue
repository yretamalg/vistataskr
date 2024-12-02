<template>
  <div class="w-full py-2">
    <div class="max-w-[1100px] mx-auto px-4">
      <div class="flex justify-between items-center">
        <!-- Left side navigation buttons -->
        <div class="flex gap-2">
          <button 
            v-for="(button, index) in navigationButtons" 
            :key="index"
            class="px-6 py-3 bg-[#0096AF] text-white rounded-full hover:bg-[#008C9E] transition-colors flex items-center gap-2 text-sm"
          >
            {{ button.text }}
            <i v-if="button.icon" :class="button.icon"></i>
          </button>
        </div>

        <!-- Right side filters -->
        <div class="flex gap-4 items-center">
          <select v-model="selectedBranch" class="border rounded-xl px-3 py-2 w-64">
            <option value="">Sucursal</option>
            <option value="1">Sucursal 1</option>
            <option value="2">Sucursal 2</option>
          </select>
          <input 
            type="date" 
            v-model="selectedDate" 
            class="border rounded-xl px-3 py-2 " 
          />
          <div class="relative flex items-center">
            <!-- Search Input con transición -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <input
                v-if="isSearchVisible"
                v-model="searchQuery"
                type="text"
                placeholder="Buscar..."
                class="border rounded-xl px-3 py-2 bg-white w-48 mr-2 transition-all duration-300"
                @keyup.esc="isSearchVisible = false"
                ref="searchInput"
              />
            </transition>
            <!-- Botón de búsqueda -->
            <button 
              @click="toggleSearch"
              class="text-[#00A4B9] px-2 hover:text-[#008C9E] transition-colors"
            >
              <i class="fas fa-search text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const selectedBranch = ref('')
const selectedDate = ref('2024-10-07')
const isSearchVisible = ref(false)
const searchQuery = ref('')
const searchInput = ref<HTMLInputElement | null>(null)

const navigationButtons = [
  { text: 'Inicio', route: '/' },
  { text: 'Ir a Cumplimiento', route: '/cumplimiento' },
  { text: 'Checklist', route: '/checklist', icon: 'fas fa-clipboard-list' }
]

const toggleSearch = async () => {
  isSearchVisible.value = !isSearchVisible.value
  if (isSearchVisible.value) {
    // Esperar a que el input sea montado y luego enfocarlo
    await nextTick()
    searchInput.value?.focus()
  }
}

watch(searchQuery, (newValue) => {
  // Emitir el valor de búsqueda para que el componente padre pueda manejarlo
  emit('search', newValue)
})

const emit = defineEmits(['update:branch', 'update:date', 'search'])
</script>

<style scoped>
input[type="date"] {
  min-width: 150px;
}
</style>