<script setup lang="ts">
import Swal from "sweetalert2";
import { api } from "~/services/api";
import { useLoading } from "~/store/loading";
import { UserRole } from "~/types/entities/auth/user";

const { start, end } = useLoading();

const handleGetTheFeature = async () => {
  try {
    start("Loading the feature...");

    const res = await api.get("/v1/feature");

    Swal.fire("The feature value:", res.data.result.feature, "info");
  } catch (error) {
    handleError(error);
  } finally {
    end();
  }
};

definePageMeta({
  middleware: "admin-and-editor-only",
});
</script>

<template>
  <div class="page-container">
    <h2 class="page-title">Admin Dashboard</h2>

    <section
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
    >
      <role-guard :allowed-roles="[UserRole.admin]">
        <div
          class="card bg-base-200 rounded-box flex flex-col items-start justify-center gap-3 p-5"
        >
          <div class="flex flex-row items-center w-full justify-between">
            <div class="flex flex-row items-center justify-start gap-2">
              <icon name="tabler:user" size="28" />
              <h3 class="text-lg font-semibold">Users</h3>
            </div>

            <div>
              <details class="dropdown dropdown-bottom">
                <summary
                  class="text-sm font-medium opacity-70 h-fit gap-1 normal-case flex flex-row items-center justify-center cursor-pointer"
                >
                  Monthly
                  <icon name="tabler:settings" size="18" />
                </summary>
                <ul
                  class="p-2 shadow menu dropdown-content z-[1] bg-base-300 rounded-box mt-2"
                >
                  <li><a class="btn btn-sm">Monthly</a></li>
                </ul>
              </details>
            </div>
          </div>

          <div class="flex flex-row items-center justify-between gap-4 w-full">
            <h2 class="text-3xl font-bold">0</h2>

            <h3 class="text-lg text-success">+ 84%</h3>
          </div>

          <div class="grid grid-cols-2 gap-4 w-full">
            <nuxt-link to="/admin/users" class="btn btn-sm btn-info w-full">
              Manage
              <icon name="tabler:user-cog" size="18" />
            </nuxt-link>
          </div>
        </div>
      </role-guard>

      <div
        class="card bg-base-200 rounded-box flex flex-col items-start justify-between gap-3 p-5"
      >
        <div class="flex flex-row items-center w-full justify-between">
          <div class="flex flex-row items-center justify-start gap-2">
            <icon name="tabler:star" size="28" />
            <h3 class="text-lg font-semibold">Unable Feature</h3>
          </div>
        </div>

        <div class="w-full">
          <button
            class="btn btn-sm btn-primary w-full"
            @click="handleGetTheFeature"
          >
            Call the unable feature
            <icon name="tabler:arrow-right" size="18" />
          </button>
        </div>
      </div>
    </section>

    <!-- <button class="btn btn-primary" @click="handleGetTheFeature">
      Get the feature value
    </button> -->
  </div>
</template>
