import { defineStore } from "pinia";
import { ref } from "vue";

export const usePanelStore = defineStore("panel", () => {
  const panel = ref(false);
  return {
    panel,
    open: () => panel.value = true,
    close: () => panel.value = false,
    toggle: () => panel.value = !panel.value,
  }
});
