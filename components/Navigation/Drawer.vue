<script setup lang="ts">
import { UserRole } from "~/types/entities/auth/user";

const route = useRoute();
const isDrawerOpen = ref(false);

const toggleDrawerOpen = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};
</script>

<template>
  <div class="w-full flex flex-row items-start justify-start">
    <div
      class="bg-[#00000077] w-screen h-screen fixed top-0 left-0 z-10 hidden max-lg:hidden transition-all duration-300"
      :class="isDrawerOpen ? '!block' : ''"
      @click.self="isDrawerOpen = false"
    ></div>

    <div
      class="flex flex-col items-center justify-start w-96 h-screen bg-base-300 p-4 transition-all duration-200"
      :class="
        isDrawerOpen
          ? 'max-lg:fixed max-lg:top-0 max-lg:translate-x-0 max-lg:!w-4/5 z-50'
          : 'max-lg:fixed max-lg:top-0 max-lg:translate-x-[-1500px] max-lg:!w-0 z-50'
      "
    >
      <div class="flex flex-row w-full items-center justify-between mb-8">
        <nuxt-link to="/dashboard" @click="isDrawerOpen = false">
          <img
            src="/images/logo-green-white.png"
            alt="Your app logo's"
            class="w-24"
          />
        </nuxt-link>

        <button class="btn btn-circle lg:hidden" @click="isDrawerOpen = false">
          <icon v-if="isDrawerOpen" name="tabler:chevron-left" size="24" />
          <icon v-else name="tabler:chevron-right" size="24" />
        </button>
      </div>

      <div class="w-full flex flex-col items-center justify-center gap-4">
        <nuxt-link
          to="/dashboard"
          class="btn btn-ghost justify-start flex-nowrap gap-4 w-full"
          :class="
            ['/dashboard', '/403', '/503'].includes(route.path)
              ? '!btn-accent'
              : ''
          "
          @click="isDrawerOpen = false"
        >
          <icon name="tabler:layout-dashboard" size="24" />

          Dashboard
        </nuxt-link>

        <role-guard :allowed-roles="[UserRole.admin, UserRole.editor]">
          <nuxt-link
            to="/admin"
            class="btn btn-ghost justify-start flex-nowrap gap-4 w-full"
            :class="
              ['/admin', '/admin/users'].includes(route.path)
                ? '!btn-accent'
                : ''
            "
            @click="isDrawerOpen = false"
          >
            <icon name="tabler:user-shield" size="24" />

            Administrative
          </nuxt-link>
        </role-guard>

        <nuxt-link
          to="/settings"
          class="btn btn-ghost justify-start flex-nowrap gap-4 w-full"
          :class="['/settings'].includes(route.path) ? '!btn-accent' : ''"
          @click="isDrawerOpen = false"
        >
          <icon name="tabler:settings" size="24" />

          Settings
        </nuxt-link>

        <nuxt-link
          to="/profile"
          class="btn btn-ghost justify-start flex-nowrap gap-4 w-full"
          :class="['/profile'].includes(route.path) ? '!btn-accent' : ''"
          @click="isDrawerOpen = false"
        >
          <icon name="tabler:user" size="24" />

          Profile
        </nuxt-link>
      </div>
    </div>

    <div class="w-full overflow-hidden">
      <navigation-navbar :toggle-drawer-open="toggleDrawerOpen" />
      <slot />
    </div>
  </div>
</template>
