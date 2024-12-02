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
      :disabled="isLocked"
    >
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
import { ref, watch } from 'vue';

export type ToggleState = 'completed' | 'neutral' | 'failed';

const props = defineProps<{
  modelValue: ToggleState;
  isLocked?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const toggleButton = ref<HTMLElement | null>(null);
const isLocked = ref(false);

// Observar cambios en el estado
watch(() => props.modelValue, (newValue) => {
  // Bloquear solo si no es neutral
  isLocked.value = newValue !== 'neutral';
});

// Observar cambios en el prop isLocked
watch(() => props.isLocked, (newValue) => {
  isLocked.value = !!newValue;
});

const handleClick = (event: MouseEvent) => {
  if (!toggleButton.value || isLocked.value) return;

  const rect = toggleButton.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const width = rect.width;
  
  if (x < width / 2) {
    emit('update:modelValue', 'completed');
  } else {
    emit('update:modelValue', 'failed');
  }
};

// Método para resetear el estado
const reset = () => {
  isLocked.value = false; // Desbloquear el toggle
  emit('update:modelValue', 'neutral');
};

defineExpose({ reset });
</script>