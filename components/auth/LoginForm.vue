<template>
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
    <Button type="submit" variant="primary" :disabled="false" class="w-full">
      Login
    </Button>
  </form>
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
