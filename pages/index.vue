<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
      <h1 class="text-3xl font-bold">Login</h1>
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
  import LoginForm from '@/components/auth/LoginForm.vue';
</script>
