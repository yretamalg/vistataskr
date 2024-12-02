<template>
  <div class="relative inline-flex items-center cursor-pointer">
    <button 
      class="w-16 h-7 rounded-full relative transition-colors duration-200"
      :class="{
        'bg-green-500': modelValue === 'completed',
        'bg-red-500': modelValue === 'failed',
        'bg-gray-200': modelValue === 'neutral'
      }"
      @click="handleClick"
      ref="toggleButton"
    >
      <!-- Áreas clickeables invisibles -->
      <div class="absolute inset-0 flex">
        <!-- Área izquierda (completado) -->
        <div 
          class="w-1/3 h-full cursor-pointer" 
          @click.stop="updateState('completed')"
        ></div>
        <!-- Área central (neutral) -->
        <div 
          class="w-1/3 h-full cursor-pointer" 
          @click.stop="updateState('neutral')"
        ></div>
        <!-- Área derecha (fallido) -->
        <div 
          class="w-1/3 h-full cursor-pointer" 
          @click.stop="updateState('failed')"
        ></div>
      </div>

      <!-- Indicador deslizante -->
      <div 
        class="absolute top-1 w-5 h-5 bg-white rounded-full transition-all duration-200 shadow-md"
        :class="{
          'left-1': modelValue === 'completed',
          'left-[22px]': modelValue === 'neutral',
          'left-[42px]': modelValue === 'failed'
        }"
      ></div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type ToggleState = 'completed' | 'neutral' | 'failed';

const props = defineProps<{
  modelValue: ToggleState
}>();

const emit = defineEmits<{
  'update:modelValue': [ToggleState]
}>();

const toggleButton = ref<HTMLElement | null>(null);

const updateState = (newState: ToggleState) => {
  emit('update:modelValue', newState);
};

const handleClick = (event: MouseEvent) => {
  if (!toggleButton.value) return;

  const rect = toggleButton.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const width = rect.width;
  
  if (x < width / 3) {
    updateState('completed');
  } else if (x < (width * 2) / 3) {
    updateState('neutral');
  } else {
    updateState('failed');
  }
};
</script>