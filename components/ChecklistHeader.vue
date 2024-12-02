<template>
  <div class="border-b pb-4">
    <div class="flex justify-between items-center mb-4">
      <div>
        <h1 class="text-teal-500 text-xl font-semibold">{{ title }}</h1>
        <p class="text-gray-500">Duración: {{ duration }}</p>
      </div>
    </div>
    <!-- Encabezados de columnas con espaciado ajustado -->
    <div class="flex items-center">
      <!-- Columna Tareas -->
      <div class="w-64 shrink-0">
        <h2 class="font-medium text-gray-700">Tareas</h2>
      </div>
      <!-- Columna Descripción Corta -->
      <div class="flex-1">
        <h2 class="font-medium text-gray-700">Descripción Corta</h2>
      </div>
      <!-- Columna Estado y Evidencia con espaciado aumentado -->
      <div class="flex items-center gap-16">
        <h2 class="font-medium text-gray-700 w-20 text-center">Estado</h2>
        <h2 class="font-medium text-gray-700 w-20 text-center">Evidencia</h2>
      </div>
    </div>
  </div>
</template>