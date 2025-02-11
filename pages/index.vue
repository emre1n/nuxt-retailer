<template>
  <Header subtext="Please select one of the methods to login">
    <template #navigation>
      <!-- Add navigation items here if needed -->
    </template>
    <template #actions>
      <!-- Add actions here if needed -->
    </template>
  </Header>
  <div
    class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
  >
    <img
      :src="loginBackground"
      alt="Login page background"
      class="absolute inset-0 object-cover w-full h-full"
    />
    <div class="absolute inset-0 bg-black/50"></div>
    <div
      class="relative z-10 w-full max-w-md p-8 space-y-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl"
    >
      <h1 class="text-3xl font-bold text-gray-900">Login</h1>
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
  import Header from '@/components/layout/Header.vue';
  import LoginForm from '@/components/auth/LoginForm.vue';
  import LoginTypeSelector from '@/components/auth/LoginTypeSelector.vue';
  import type { LoginType } from '@/types/auth';
  import loginBackground from '@/assets/img/login-background.jpg';

  const selectedLoginType = ref<LoginType | null>(null);

  const handleLoginTypeSelect = (type: LoginType) => {
    selectedLoginType.value = type;
  };
</script>
