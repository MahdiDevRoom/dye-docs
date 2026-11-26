import { useThemeStore } from "@/stores/useThemeStore";
import { useStatusbarStore } from "@/stores/useStatusbarStore";
import { storeToRefs } from "pinia";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";

export function useTheme() {
  const themeStore = useThemeStore();
  const statusbarStore = useStatusbarStore();
  const { statusbar } = storeToRefs(statusbarStore);

  const getSysTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const sysTheme = ref(getSysTheme());

  const resolvedTheme = computed(() =>
    themeStore.theme === "auto" ? sysTheme.value : themeStore.theme
  );

  let mql = null;
  const handler = (e) => (sysTheme.value = e.matches ? "dark" : "light");

  onMounted(() => {
    mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.addEventListener("change", handler);
  });

  onUnmounted(() => mql?.removeEventListener("change", handler));

  const applyThemeColor = (color) => {
    if (!color) return;

    const probe = document.createElement("div");
    probe.style.color = `var(--${color})`;
    probe.style.display = "none";
    document.body.appendChild(probe);

    const resolve = getComputedStyle(probe).color;
    document.body.removeChild(probe);

    if (!resolve) return;

    let meta = document.querySelector("meta[name='theme-color']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", resolve);
  };

  watch(
    [resolvedTheme, statusbar],
    ([newTheme, newStatusbar]) => {
      const root = document.documentElement;

      root.setAttribute("data-theme", newTheme);

      applyThemeColor(newStatusbar);

      root.classList.add("freeze");
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => root.classList.remove("freeze"))
      );

      return () => {
        cancelAnimationFrame(id);
        root.classList.remove("freeze");
      };
    },
    { flush: "post", immediate: true }
  );
}