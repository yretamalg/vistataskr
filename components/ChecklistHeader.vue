<template>
  <div class="border-b pb-4">
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-teal-500 text-xl font-semibold">{{ title }}</h1>
        <p class="text-gray-500">Duración: {{ duration }}</p>
      </div>
      <div class="flex gap-8">
        <span class="font-semibold">Estado</span>
        <span class="font-semibold">Evidencia</span>
      </div>
    </div>
  </div>
</template>