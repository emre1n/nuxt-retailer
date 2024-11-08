<template>
  <form @submit.prevent="handleLogin" class="space-y-4">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl">{{ loginType.label }}</h2>
      <Button variant="secondary" link @click="$emit('back')"> ← Back </Button>
    </div>

    <Input
      v-model="identifier"
      :label="loginType.label"
      type="text"
      required
      :placeholder="loginType.placeholder"
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
      :disabled="isLoading"
      class="w-full"
    >
      {{ isLoading ? 'Logging in...' : 'Login' }}
    </Button>
  </form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Button from '@/components/ui/Button.vue';
  import Input from '@/components/ui/Input.vue';
  import type { LoginType } from '@/types/auth';

  interface Props {
    loginType: LoginType;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<{
    (e: 'back'): void;
  }>();

  const router = useRouter();
  const identifier = ref('');
  const password = ref('');
  const isLoading = ref(false);

  const handleLogin = async () => {
    try {
      isLoading.value = true;
      // Replace this with your actual login API call
      // const response = await loginUser({
      //   type: props.loginType.id,
      //   identifier: identifier.value,
      //   password: password.value
      // });

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push('/secure/feed');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      isLoading.value = false;
    }
  };
</script>
