<script setup lang="ts">
// import "@sweetalert2/theme-dark/dark.css";
import { useAuthStore } from "./store/auth";

const authStore = useAuthStore();

onBeforeMount(() => {
  authStore.updateServicesInfo();
  authStore.updateUserData();
});

useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
