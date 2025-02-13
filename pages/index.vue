<template>
  <Header subtext="Please select one of the methods to login">
    <template #navigation>
      <!-- Add navigation items here if needed -->
    </template>
    <template #actions>
      <!-- Add actions here if needed -->
    </template>
  </Header>
  <main
    role="main"
    class="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
  >
    <img
      :src="loginBackground"
      alt="Decorative login page background"
      class="absolute inset-0 object-cover w-full h-full"
      role="presentation"
    />
    <div class="absolute inset-0 bg-black/50" aria-hidden="true"></div>
    <div
      class="relative z-10 w-full max-w-md p-8 space-y-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl"
      role="region"
      aria-labelledby="login-heading"
    >
      <h1
        id="login-heading"
        class="text-3xl font-bold text-gray-900"
        tabindex="-1"
      >
        Login
      </h1>
      <LoginTypeSelector
        v-if="!selectedLoginType"
        @select="handleLoginTypeSelect"
        aria-label="Select login method"
      />
      <LoginForm
        v-else
        :login-type="selectedLoginType"
        @back="selectedLoginType = null"
        :aria-label="'Login form for ' + selectedLoginType + ' method'"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Header from '@/components/layout/Header.vue';
  import LoginForm from '@/components/auth/LoginForm.vue';
  import LoginTypeSelector from '@/components/auth/LoginTypeSelector.vue';
  import type { LoginType } from '@/types/auth';
  import loginBackground from '@/assets/img/login-background.jpg';
  import { useSeo } from '@/composables/useSeo';

  // SEO implementation
  useSeo({
    title: 'Login',
    description:
      'Securely access your retail management platform. Sign in now for store management, inventory tracking, and sales reports.',
    keywords: [
      'login',
      'sign in',
      'retail management',
      'store management',
      'inventory tracking',
      'sales reports',
    ],
    type: 'website',
  });

  const selectedLoginType = ref<LoginType | null>(null);

  const handleLoginTypeSelect = (type: LoginType) => {
    selectedLoginType.value = type;
  };
</script>
