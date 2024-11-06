<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
      <h1 class="text-3xl font-bold text-center">Login</h1>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <Input
          v-model="email"
          label="Email"
          type="email"
          required
          placeholder="Enter your email"
        />
        <Input
          v-model="password"
          label="Password"
          type="password"
          required
          placeholder="Enter your password"
        />
        <Button
          type="submit"
          variant="primary"
          :disabled="false"
          class="w-full"
        >
          Login
        </Button>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Button from '@/components/ui/Button.vue';
  import Input from '@/components/ui/Input.vue';

  const router = useRouter();
  const email = ref('');
  const password = ref('');

  const handleLogin = async () => {
    try {
      // Replace this with your actual login API call
      // const response = await loginUser(email.value, password.value)

      // Simulate successful login
      router.push('/secure/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
</script>
