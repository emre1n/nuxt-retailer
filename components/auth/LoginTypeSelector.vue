<template>
  <div class="space-y-4">
    <Button
      v-for="type in loginTypes"
      :key="type.id"
      @click="selectLoginType(type)"
      variant="secondary"
      outline
      class="w-full"
    >
      {{ type.label }}
    </Button>
  </div>
</template>

<script setup lang="ts">
  import Button from '@/components/ui/Button.vue';
  import type { LoginType } from '@/types/auth';

  const emit = defineEmits<{
    (e: 'select', type: LoginType): void;
  }>();

  const loginTypes: LoginType[] = [
    {
      id: 'phone',
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
    },
    {
      id: 'customer',
      label: 'Customer Number',
      placeholder: 'Enter your customer number',
    },
    {
      id: 'taxId',
      label: 'Tax ID Number',
      placeholder: 'Enter your tax ID number',
    },
  ];

  const selectLoginType = (type: LoginType) => {
    emit('select', type);
  };
</script>
