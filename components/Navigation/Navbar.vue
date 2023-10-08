<script setup lang="ts">
import { navigation } from "~/navigation/navigation";

const handleCloseModal = () => {
  const myDrawer = document.querySelector<HTMLInputElement>("#my-drawer");

  if (myDrawer?.checked) {
    myDrawer?.click();
  }
};
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="flex flex-col items items-start justify-start w-full h-full">
        <div class="navbar bg-base-200 z-30">
          <div class="flex-1">
            <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">
              MyApp
            </nuxt-link>
          </div>
          <div class="flex-none sm:hidden">
            <label class="btn btn-square btn-ghost" for="my-drawer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </label>
          </div>

          <div
            class="sm:flex hidden flex-row items-center justify-end gap-4 mr-4"
          >
            <template v-for="(item, index) in navigation" :key="index">
              <navigation-nav-item
                :title="item.title"
                :path="item.path"
                :variant="item?.variant"
                :extra="item?.extra"
                @click="
                  () => {
                    item?.onClick ? item.onClick() : null;
                    handleCloseModal();
                  }
                "
              ></navigation-nav-item>
            </template>
          </div>
        </div>

        <slot />
      </div>
    </div>

    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul
        class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content gap-4 h-full"
      >
        <nuxt-link
          to="/"
          class="font-bold mb-4 normal-case text-xl text-center whitespace-pre-wrap"
        >
          MyApp
        </nuxt-link>

        <template v-for="(item, index) in navigation" :key="index">
          <navigation-nav-item
            :title="item.title"
            :path="item.path"
            :variant="item?.variant"
            :extra="item?.extra"
            @click="handleCloseModal"
          ></navigation-nav-item>
        </template>
      </ul>
    </div>
  </div>
</template>
