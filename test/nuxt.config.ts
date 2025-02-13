import { defineNuxtConfig } from 'nuxt/config';
import baseConfig from '../nuxt.config';

export default defineNuxtConfig({
  ...baseConfig,
  modules: [...(baseConfig.modules || []), '@nuxt/test-utils/module'],
});
