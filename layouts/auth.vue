<script setup lang="ts"></script>

<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss">
.page-content-auth {
  @apply flex-1 h-full flex flex-col items-center justify-center gap-4 relative z-10;
  > h2,
  .page-title {
    @apply text-2xl font-bold;
  }
  > h3,
  .page-subtitle {
    @apply text-xl font-bold;
  }
}
</style>
