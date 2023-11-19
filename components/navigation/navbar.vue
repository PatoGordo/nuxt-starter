<script setup lang="ts">
import Swal from "sweetalert2";
import { api } from "~/services/api";
import { useAuthStore } from "~/store/auth";
import { useLoading } from "~/store/loading";

const colorMode = useColorMode();
const props = defineProps<NavbarProps>();

const authStore = useAuthStore();
const { start, end } = useLoading();
const router = useRouter();

const handleSignOut = async () => {
  const answer = await Swal.fire({
    title: "Are you sure?",
    text: "Do you want to sign out?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, sign out!",
    cancelButtonText: "No, stay signed in",
  });

  if (!answer.isConfirmed) {
    return;
  }

  try {
    start("Finishing session...");

    await api.post("/v1/auth/sign-out");

    authStore.signOut();

    router.push("/auth/sign-in");
  } catch (error) {
    authStore.signOut();
  } finally {
    end();
  }
};

const handleToggleTheme = () => {
  if (colorMode.preference === "dark") {
    colorMode.preference = "light";
  } else {
    colorMode.preference = "dark";
  }
};

interface NavbarProps {
  toggleDrawerOpen: () => void;
}
</script>

<template>
  <div
    class="flex flex-row items-center justify-between h-[65px] w-full bg-base-300 p-4 gap-4"
  >
    <div class="lg:hidden">
      <button class="btn btn-circle" @click="props.toggleDrawerOpen">
        <icon name="tabler:menu-2" size="24" />
      </button>
    </div>

    <div class="flex flex-row items-center gap-4 max-lg:hidden">
      <label
        for="navbar-search-input"
        class="cursor-pointer btn bg-base-100 btn-circle"
      >
        <icon name="tabler:search" size="24" />
      </label>
      <input
        id="navbar-search-input"
        type="text"
        class="input input-md w-[360px]"
        placeholder="Seach..."
      />
    </div>

    <div class="flex flex-row items-center justify-end gap-4">
      <button class="btn btn-circle" @click="handleToggleTheme">
        <template v-if="colorMode.preference === 'light'">
          <icon name="tabler:moon" size="20" />
        </template>
        <template v-else>
          <icon name="tabler:sun" size="20" />
        </template>
      </button>

      <button class="btn btn-circle">
        <icon name="tabler:bell" size="20" />
      </button>

      <div class="dropdown dropdown-left dropdown-bottom">
        <label tabindex="0" class="flex items-center justify-center">
          <nuxt-link to="/profile" class="btn btn-circle btn-neutral">
            <img src="/images/user-profile-picture.webp" class="rounded-full" />
          </nuxt-link>
        </label>
      </div>

      <button class="btn btn-error btn-circle" @click="handleSignOut">
        <icon name="tabler:login-2" size="24" />
      </button>
    </div>
  </div>
</template>
