<script setup lang="ts">
import Swal from "sweetalert2";
import { api } from "~/services/api";
import { useLoading } from "~/store/loading";

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

    <button class="btn btn-primary" @click="handleGetTheFeature">
      Get the feature value
    </button>
  </div>
</template>
