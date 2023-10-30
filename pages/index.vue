<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
</script>

/
<template>
  <div class="hero min-h-screen bg-base-200">
    <div
      class="hero-content flex-col lg:flex-row-reverse grid grid-cols-1 sm:grid-cols-2 gap-12"
    >
      <div class="flex sm:hidden flex-col items-start justify-center">
        <img
          src="/images/logo-green-white.png"
          alt="Your App Logo"
          class="w-1/2 rounded-lg"
        />
      </div>

      <div class="flex flex-col items-start justify-center">
        <h1 class="text-5xl font-bold">Nuxt Starter</h1>

        <p class="py-6">
          A FullStack Website Template using Nuxt 3 framework, Prisma ORM,
          TypeScript and many other technologies. With UI library,
          Authentication and other flows already done.
        </p>

        <nuxt-link to="/auth/sign-in" class="btn btn-primary">
          Sign In to Demo</nuxt-link
        >
      </div>

      <div class="hidden sm:flex flex-col items-center justify-center">
        <img
          src="/images/logo-green-white.png"
          alt="Your App Logo"
          class="w-3/4 rounded-lg"
        />
      </div>
    </div>
  </div>
</template>
