<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-gray-700">
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
      class="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      :class="{ 'border-red-500': error }"
    />
    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
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
  defineEmits(['update:modelValue']);
</script>
