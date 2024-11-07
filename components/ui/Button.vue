<template>
  <button
    :class="[
      'px-4 py-2 rounded-md transition-colors font-semibold',
      variants[variant],
      sizes[size],
      { 'opacity-50 cursor-not-allowed': disabled },
      { 'inline-flex items-center gap-2': loading },
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span v-if="loading" class="animate-spin">⚪</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
  interface Props {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
    loading: false,
  });

  const variants = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-500/50',
    secondary:
      'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus:ring-2 focus:ring-secondary-500/50',
    danger:
      'bg-error-500 text-white hover:bg-error-700 focus:ring-2 focus:ring-error-500/50',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
</script>
