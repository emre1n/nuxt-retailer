import { afterAll, afterEach, beforeAll } from 'vitest';
import { createApp } from 'vue';
import { config } from '@vue/test-utils';

// Global Vue test configuration
config.global.stubs = {
  // Add any global stubs here
  NuxtLink: true,
};

// Setup any global test hooks
beforeAll(() => {
  // Run before all tests
});

afterAll(() => {
  // Run after all tests
});

afterEach(() => {
  // Run after each test
});
