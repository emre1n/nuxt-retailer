<template>
  <form @submit.prevent="handleLogin" class="space-y-4">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl">Login with {{ loginType.label }}</h2>
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
    <Button variant="primary" outline @click="$emit('back')" class="w-full"
      >Back</Button
    >
  </form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Button from '@/components/ui/Button.vue';
  import Input from '@/components/ui/Input.vue';
  import type { LoginType } from '@/types/auth';
  import { useAuthApi } from '@/services/api';
  import { useAuth } from '@/composables/useAuth';

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
  const { setToken } = useAuth();

  const handleLogin = async () => {
    try {
      isLoading.value = true;
      const authApi = useAuthApi();

      let response;

      console.log('Attempting login with:', {
        type: props.loginType.id,
        identifier: identifier.value,
      });

      switch (props.loginType.id) {
        case 'customer':
          response = await authApi.loginWithCustomerCode({
            customerCode: identifier.value,
            password: password.value,
          });
          break;

        case 'phone':
          response = await authApi.loginWithPhoneNumber({
            phoneNumber: identifier.value,
            password: password.value,
          });
          break;

        case 'taxId':
          response = await authApi.loginWithTaxId({
            taxId: identifier.value,
            password: password.value,
          });
          break;
      }

      console.log('Raw API response:', response);

      if (!response) {
        throw new Error('No response received from server');
      }

      if (response.token && typeof response.token === 'string') {
        console.log('Valid token received, attempting to save');
        try {
          setToken(response.token);
          await router.push('/secure/feed');
        } catch (error) {
          console.error('Failed to save token or redirect:', error);
          throw new Error('Authentication failed - please try again');
        }
      } else {
        console.error('Invalid token structure:', response);
        throw new Error('Invalid token received from server');
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Login failed';
      console.error('Login error details:', error);
      // TODO: Add user-facing error notification here
    } finally {
      isLoading.value = false;
    }
  };
</script>
