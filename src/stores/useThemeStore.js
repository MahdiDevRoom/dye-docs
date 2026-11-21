import { defineStore } from "pinia";
import { ref } from "vue";

const map = {
  light: "dark",
  dark: "auto",
  auto: "light",
};

export const useThemeStore = defineStore("theme", () => {
  const theme = ref("auto");
  return {
    theme,

    setTheme: (val) => {
      if (val in map) theme.value = val;
    },

    toggle: () => {
      theme.value = map[theme.value] ?? "auto";
    },
  }
}, {
  persist: {
    key: "dye-docs-storage",
    pick: ["theme"],
  }
});
