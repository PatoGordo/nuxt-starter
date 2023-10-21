<script setup lang="ts">
import { navigation } from "~/navigation/navigation";

const route = useRoute();
const opened = ref(false);

const handleCloseModal = () => {
  opened.value = false;
};

watch(
  () => route.path,
  () => {
    handleCloseModal();
  },
);
</script>

<template>
  <div class="drawer">
    <input
      id="my-drawer"
      v-model="opened"
      type="checkbox"
      class="drawer-toggle"
    />
    <div class="drawer-content">
      <div class="flex flex-col items items-start justify-start w-full h-full">
        <div class="navbar bg-base-200 z-30">
          <div class="flex-1">
            <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">
              MyApp
            </nuxt-link>
          </div>
          <div class="flex-none sm:hidden">
            <label class="btn btn-square btn-ghost" @click="opened = !opened">
              <icon name="tabler:menu-2" size="24" />
            </label>
          </div>

          <label
            class="sm:flex hidden flex-row items-center justify-end gap-4 mr-4"
            @click.stop="handleCloseModal"
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
          </label>
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

    <!-- Pre loading elements -->
    <button class="btn btn-error hidden"></button>
  </div>
</template>
