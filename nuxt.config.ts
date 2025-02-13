// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  // modules: ['@nuxtjs/tailwindcss', '@nuxt/test-utils/module'],
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      title: 'Retailer App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A modern retail management platform for businesses',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: 'Retailer App' },
        {
          property: 'og:description',
          content: 'A modern retail management platform for businesses',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },
  routeRules: {
    '/sw.js': { redirect: '/' },
  },
});
