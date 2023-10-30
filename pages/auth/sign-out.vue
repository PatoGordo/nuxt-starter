<script setup lang="ts">
import { api } from "~/services/api";
import { useAuthStore } from "~/store/auth";
import { useLoading } from "~/store/loading";

const authStore = useAuthStore();
const { start, end } = useLoading();
const router = useRouter();

const handleSignOut = async () => {
  try {
    start("Finishing session...");

    await api.post("/v1/auth/sign-out");

    authStore.signOut();
    router.push("/");
  } catch (error) {
    authStore.signOut();
  } finally {
    end();
  }
};

onBeforeMount(async () => {
  await handleSignOut();
});
</script>

<template>
  <navigation-auth-page>
    <div>
      <h2>Sign Out</h2>
    </div>
  </navigation-auth-page>
</template>
