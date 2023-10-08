import { defineStore } from "pinia";

export const useLoading = defineStore("loading", () => {
  const hint = ref("");
  const isOpen = ref(false);

  const start = (hintText: string) => {
    isOpen.value = true;
    hint.value = hintText;
  };

  const end = () => {
    isOpen.value = false;
    hint.value = "";
  };

  return { isOpen, hint, start, end };
});
