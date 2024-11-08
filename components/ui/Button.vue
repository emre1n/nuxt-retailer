<template>
  <button
    :class="[
      'px-4 py-2 rounded-sm transition-colors font-semibold',
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
    outline?: boolean;
    link?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
    loading: false,
    outline: false,
    link: false,
  });

  const getVariantClasses = (variant: Props['variant']) => {
    if (props.link) {
      switch (variant) {
        case 'primary':
          return 'text-primary-600 hover:text-primary-700 hover:underline';
        case 'secondary':
          return 'text-secondary-600 hover:text-secondary-700 hover:underline';
        case 'danger':
          return 'text-error-600 hover:text-error-700 hover:underline';
        default:
          return '';
      }
    }

    if (props.outline) {
      switch (variant) {
        case 'primary':
          return 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500/50';
        case 'secondary':
          return 'border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-50 focus:ring-2 focus:ring-secondary-500/50';
        case 'danger':
          return 'border-2 border-error-500 text-error-500 hover:bg-error-50 focus:ring-2 focus:ring-error-500/50';
        default:
          return '';
      }
    }

    switch (variant) {
      case 'primary':
        return 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-primary-500/50';
      case 'secondary':
        return 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus:ring-2 focus:ring-secondary-500/50';
      case 'danger':
        return 'bg-error-500 text-white hover:bg-error-700 focus:ring-2 focus:ring-error-500/50';
      default:
        return '';
    }
  };

  const variants = {
    primary: getVariantClasses('primary'),
    secondary: getVariantClasses('secondary'),
    danger: getVariantClasses('danger'),
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
</script>
