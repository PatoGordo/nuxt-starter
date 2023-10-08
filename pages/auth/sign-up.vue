<script lang="ts" setup>
import { useAuthStore } from "~/store/auth";
import { appConfig } from "~/config/app";
import { useLoading } from "~/store/loading";
import { api } from "~/services/api";

const name = ref("");
const email = ref("");
const password = ref("");

const authStore = useAuthStore();

const { start, end } = useLoading();

const router = useRouter();

const handleSubmit = async () => {
  try {
    start("Creating account...");

    const res = await api.post("/v1/auth/sign-up", {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    const result = res.data.result;

    authStore.signIn({
      token: result.token,
      refresh_token: result.refresh_token,
      user: result.user,
    });

    router.push("/dashboard");
  } catch (error) {
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
  <div
    class="page-content-auth flex flex-col items-center justify-center h-full"
  >
    <h2 class="page-title pb-0">Register to {{ appConfig.appName }}</h2>

    <form
      class="mt-2 w-full flex flex-col items-start justify-start gap-4"
      @submit.prevent="handleSubmit"
    >
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">What is your name?</span>
        </label>
        <input
          v-model="name"
          type="text"
          :placeholder="'Your name...'"
          class="input input-bordered w-full"
          required
        />
      </div>

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
        <nuxt-link to="/auth/sign-in" class="link">
          Already have an account? Login with it
        </nuxt-link>
      </div>

      <button
        class="btn btn-primary self-end w-1/3"
        type="submit"
        :disabled="!email || !password || password.length < 8"
      >
        Register
      </button>
    </form>
  </div>
</template>
