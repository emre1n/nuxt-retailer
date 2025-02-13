import { defineVitestConfig } from '@nuxt/test-utils/config';
import { fileURLToPath } from 'node:url';

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'dist/**',
        '.nuxt/**',
        'coverage/**',
        '**/*.d.ts',
        'test/setup/**',
      ],
    },
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
    deps: {
      optimizer: {
        ssr: {
          include: ['vue-router'],
        },
      },
      interopDefault: true,
    },
    include: ['test/**/*.test.ts', 'test/**/*.spec.ts'],
    exclude: ['node_modules/**', '.nuxt/**'],
  },
});
