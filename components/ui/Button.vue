<template>
  <button
    :class="[
      'px-4 py-2 rounded-md transition-colors',
      variants[variant],
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
  interface Props {
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    disabled: false,
    type: 'button',
    loading: false,
  });

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
</script>
