<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
import { NavigationItem } from "~/types/components/navigation";

const route = useRoute();
const authStore = useAuthStore();

const props = defineProps<NavigationItem>();

const variantLink = `link w-full flex items-center justify-center`;
const variantPrimaryButton =
  "btn btn-outline btn-primary btn-sm max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:w-full max-sm:content-center max-sm:text-center";
const variantSecondaryButton =
  "btn btn-secondary btn-sm max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:w-full max-sm:content-center max-sm:text-center";

const handleGetStyle = () => {
  switch (props?.variant) {
    case "link":
      return variantLink;

    case "primary-button":
      return variantPrimaryButton;

    case "secondary-button":
      return variantSecondaryButton;

    default:
      return variantLink;
  }
};

const handleShouldShownItem = () => {
  if (props.extra?.onlyLoggedIn && !authStore.token) {
    return false;
  }

  if (props.extra?.onlyUnLoggedIn && authStore.token) {
    return false;
  }

  if (
    props.extra?.onlyUserWithRole &&
    (!authStore.user?.role ||
      !props.extra?.onlyUserWithRole.includes(authStore.user?.role))
  ) {
    return false;
  }

  return true;
};
</script>

<template>
  <template v-if="handleShouldShownItem()">
    <button
      :class="[
        handleGetStyle(),
        props?.extra?.className,
        props?.path ? '!hidden' : '',
      ]"
      @click="() => (props?.onClick ? props?.onClick() : null)"
    >
      {{ props.title }}
    </button>

    <nuxt-link
      :to="props.path"
      :class="[
        handleGetStyle(),
        props?.extra?.className,
        props?.path ? '' : '!hidden',
        route.path === props.path ? 'text-accent' : '',
      ]"
    >
      {{ props.title }}
    </nuxt-link>
  </template>
</template>
