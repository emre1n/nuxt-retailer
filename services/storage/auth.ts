import { createStorageService } from './index';

export const authStorage = createStorageService('auth_');

// Constants for storage keys
export const AUTH_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  TOKEN_EXPIRY: 'token_expiry',
} as const;

// Token expiry time (24 hours)
export const TOKEN_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Helper to check if token is expired
export const isTokenExpired = (): boolean => {
  const expiry = authStorage.get<number>(AUTH_KEYS.TOKEN_EXPIRY);
  return !expiry || Date.now() > expiry;
};
