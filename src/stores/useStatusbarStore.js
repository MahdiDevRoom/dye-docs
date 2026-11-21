import { defineStore } from "pinia";
import { ref } from "vue";

export const useStatusbarStore = defineStore("statusbar", () => {
  const statusbar = ref(null);
  return {
    statusbar,
    set: (val) => statusbar.value = val,
    reset: () => statusbar.value = null,
  }
});
