export default defineNuxtConfig({
  modules: [
    "@nuxt/image",
    "nuxt-security",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/color-mode",
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
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
});
