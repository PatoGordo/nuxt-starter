export default defineNuxtConfig({
  modules: ["nuxt-security"],
  devtools: { enabled: true },
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
});
