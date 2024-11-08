<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-secondary-700">
      {{ label }}
    </label>
    <input
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="w-full px-3 py-2 border rounded-sm text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 disabled:bg-secondary-50 disabled:text-secondary-500"
      :class="{
        'border-error-500 focus:ring-error-500/50 focus:border-error-500':
          error,
      }"
    />
    <p v-if="error" class="text-sm text-error-600">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    modelValue: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
  }

  defineProps<Props>();
  defineEmits<{
    'update:modelValue': [value: string];
  }>();
</script>
