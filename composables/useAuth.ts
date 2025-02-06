import { ref, computed } from 'vue';
import {
  authStorage,
  AUTH_KEYS,
  TOKEN_EXPIRY,
  isTokenExpired,
} from '@/services/storage/auth';

export function useAuth() {
  const token = ref(authStorage.get<string>(AUTH_KEYS.TOKEN));

  const isAuthenticated = computed(() => {
    return !!token.value && !isTokenExpired();
  });

  const setToken = (newToken: string) => {
    token.value = newToken;
    authStorage.set(AUTH_KEYS.TOKEN, newToken);
    // Set token expiry
    authStorage.set(AUTH_KEYS.TOKEN_EXPIRY, Date.now() + TOKEN_EXPIRY);
  };

  const clearAuth = () => {
    token.value = null;
    authStorage.clear();
  };

  // Check for expired token on initialization
  if (isTokenExpired()) {
    clearAuth();
  }

  return {
    token,
    isAuthenticated,
    setToken,
    clearAuth,
  };
}
