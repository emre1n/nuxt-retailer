<template>
  <header class="bg-white shadow" role="banner">
    <nav class="container mx-auto px-4 py-4" aria-label="Main navigation">
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <NuxtLink
            to="/"
            class="text-xl font-bold"
            aria-label="Retailer - Return to home page"
            >Retailer</NuxtLink
          >
          <span
            v-if="subtext"
            class="text-sm text-gray-600"
            aria-live="polite"
            >{{ subtext }}</span
          >
        </div>

        <div class="flex items-center space-x-4">
          <div role="navigation" aria-label="Secondary navigation">
            <slot name="navigation" />
          </div>
          <div role="group" aria-label="Page actions">
            <slot name="actions" />
          </div>
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
