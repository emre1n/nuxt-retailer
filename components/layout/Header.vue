<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <NuxtLink to="/" class="text-xl font-bold">Retailer</NuxtLink>
          <span v-if="subtext" class="text-sm text-gray-600">{{
            subtext
          }}</span>
        </div>

        <div class="flex items-center space-x-4">
          <slot name="navigation" />
          <slot name="actions" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  defineProps<{
    subtext?: string;
  }>();
</script>
