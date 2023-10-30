<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
import { UserRole } from "~/types/entities/auth/user";

const authStore = useAuthStore();

const props = defineProps<RoleGuardProps>();

const userCanSee = () => {
  if (!authStore.user?.role) {
    return;
  }

  const roleIsAllowed =
    props?.allowedRoles?.includes(authStore?.user?.role) || false;
  const roleIsForbidden =
    props?.forbiddenRole?.includes(authStore?.user?.role) || false;

  if (roleIsAllowed && !roleIsForbidden) {
    return true;
  }

  return false;
};

interface RoleGuardProps {
  allowedRoles?: UserRole[];
  forbiddenRole?: UserRole[];
}
</script>

<template>
  <template v-if="userCanSee()">
    <slot />
  </template>
</template>
