<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
      <h1 class="text-3xl font-bold">Login</h1>
      <LoginTypeSelector
        v-if="!selectedLoginType"
        @select="handleLoginTypeSelect"
      />
      <LoginForm
        v-else
        :login-type="selectedLoginType"
        @back="selectedLoginType = null"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import LoginForm from '@/components/auth/LoginForm.vue';
  import LoginTypeSelector from '@/components/auth/LoginTypeSelector.vue';
  import type { LoginType } from '@/types/auth';

  const selectedLoginType = ref<LoginType | null>(null);

  const handleLoginTypeSelect = (type: LoginType) => {
    selectedLoginType.value = type;
  };
</script>
