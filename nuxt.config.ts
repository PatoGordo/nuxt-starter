export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      CONFIG_CAT_SDK_KEY: process.env.CONFIG_CAT_SDK_KEY,
    },
  },
});
