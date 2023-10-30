export default defineNuxtConfig({
  modules: [
    "nuxt-security",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  runtimeConfig: {
    public: {
      CONFIG_CAT_SDK_KEY: process.env.CONFIG_CAT_SDK_KEY,
    },
  },
  security: {
    corsHandler: {
      origin: "*",
      methods: "*",
      allowHeaders: "*",
      exposeHeaders: "*",
    },
    headers: {
      xXSSProtection: "1",
      contentSecurityPolicy: false,
    },
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
});
