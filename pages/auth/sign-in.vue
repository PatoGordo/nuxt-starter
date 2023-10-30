<script lang="ts" setup>
import { useAuthStore } from "~/store/auth";
import { appConfig } from "~/config/app";
import { useLoading } from "~/store/loading";
import { api } from "~/services/api";
import { handleError } from "~/utils/handle-error";

const email = ref("");
const password = ref("");
const passwordRef = ref<HTMLInputElement | null>(null);

const authStore = useAuthStore();

const { start, end } = useLoading();

const router = useRouter();

const handleSubmit = async () => {
  try {
    start("Starting session...");

    const res = await api.post("/v1/auth/sign-in", {
      email: email.value,
      password: password.value,
    });

    const result = res.data.result;

    authStore.signIn({
      token: result.token,
      refresh_token: result.refresh_token,
      user: result.user,
    });

    if (result.user.role === "admin" || result.user.role === "editor") {
      return router.push("/admin");
    }

    router.push("/dashboard");
  } catch (error) {
    handleError(error, () => {
      password.value = "";
      passwordRef.value?.focus();
    });
  } finally {
    end();
  }
};

definePageMeta({
  layout: "auth",
  middleware: "already-auth",
  pageTransition: {
    name: "slide-fade",
    mode: "out-in",
  },
});
</script>

<template>
  <navigation-auth-page>
    <div
      class="page-content-auth flex flex-col items-center justify-center h-full"
    >
      <h2 class="page-title pb-0">Login to {{ appConfig.appName }}</h2>

      <form
        class="mt-2 w-full flex flex-col items-start justify-start gap-4"
        @submit.prevent="handleSubmit"
      >
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">What is your email?</span>
          </label>
          <input
            v-model="email"
            type="email"
            :placeholder="'Your email...'"
            class="input input-bordered w-full"
            required
          />
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">What is your password?</span>
          </label>
          <input
            ref="passwordRef"
            v-model="password"
            type="password"
            :placeholder="'Your password...'"
            class="input input-bordered w-full"
            required
          />
        </div>

        <div
          class="flex flex-row flex-wrap items-center justify-between w-full gap-2"
        >
          <nuxt-link to="/auth/sign-up" class="link">
            Does not have an account? Create one
          </nuxt-link>

          <nuxt-link to="/auth/forgot-password" class="link">
            Forgot your password?
          </nuxt-link>
        </div>

        <button
          class="btn btn-primary self-end 2-1/2"
          type="submit"
          :disabled="!email || !password || password.length < 8"
        >
          Sign In
        </button>
      </form>
    </div>
  </navigation-auth-page>
</template>
