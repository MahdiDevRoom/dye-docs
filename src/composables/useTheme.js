import { ref, watchEffect, onMounted, onUnmounted } from "vue";
import { useThemeStore } from "@/stores/useThemeStore";
import { useStatusbarStore } from "@/stores/useStatusbarStore";

export function useTheme() {
  const themeStore = useThemeStore();
  const statusbarStore = useStatusbarStore();

  const getSysTheme = () => {
    if (typeof window === "undefined") return null;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  const sysTheme = ref(getSysTheme());

  let mql = null;
  const handler = (e) => sysTheme.value = e.matches ? "dark" : "light";

  onMounted(() => {
    if (typeof window === "undefined") return;
    mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.addEventListener("change", handler);
  });

  onUnmounted(() => {
    mql?.removeEventListener("change", handler);
  });

  watchEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", themeStore.theme);
  }, { flush: "sync" });

  watchEffect(() => {
    themeStore.theme;
    sysTheme.value;

    if (typeof document === "undefined") return;
    const root = document.documentElement;

    root.classList.add("freeze");
    const id = requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("freeze")));

    return () => {
      cancelAnimationFrame(id);
      root.classList.remove("freeze");
    }
  }, { flush: "post" });

  watchEffect(() => {
    themeStore.theme;
    sysTheme.value;

    if (!statusbarStore.statusbar || typeof document === "undefined") return;

    const probe = document.createElement("div");
    probe.style.color = `var(--${statusbarStore.statusbar})`;
    probe.style.display = "none";
    document.body.appendChild(probe);

    const color = getComputedStyle(probe).color;
    document.body.removeChild(probe);

    if (!color) return;

    let meta = document.querySelector("meta[name='theme-color']");
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", color);
  }, { flush: "post"});
}