<script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import { usePanelStore } from "@/stores/usePanelStore";
  import Anchor from "@/components/Anchor.vue";

  const route = useRoute();
  const panel = usePanelStore();

  const list = computed(() => [
    { link: "/docs/overview",     label: "Overview",               current: route.name === "overview" },
    { link: "/docs/installation", label: "Installation",           current: route.name === "installation" },
    { link: "/docs/quick-start",  label: "Quick Start",            current: route.name === "quick-start" },
    { link: "/docs/imports",      label: "Imports and exports",    current: route.name === "imports" },
    { link: "/docs/markup",       label: "Markup syntax",          current: route.name === "markup" },
    { link: "/docs/colors",       label: "Colors and effects",     current: route.name === "colors" },
    { link: "/docs/aliases",      label: "Aliases and reset",      current: route.name === "aliases" },
    { link: "/docs/render",       label: "Rendering",              current: route.name === "render" },
    { link: "/docs/ink",          label: "Ink API",                current: route.name === "ink" },
    { link: "/docs/low-level",    label: "Low-level API",          current: route.name === "low-level" },
    { link: "/docs/utilities",    label: "Text utilities",         current: route.name === "utilities" },
    { link: "/docs/types",        label: "TypeScript types",       current: route.name === "types" },
    { link: "/docs/examples",     label: "Examples",               current: route.name === "examples" },
    { link: "/docs/behavior",     label: "Behavior and limitations", current: route.name === "behavior" },
    { link: "/docs/project",      label: "Project information",    current: route.name === "project" },
  ]);
  
</script>

<template>
  <nav aria-label="Documentation table of contents">
    <Anchor 
      v-for="(anchor, index) in list" 
      :class="{ current: anchor.current }" 
      :no-style="true"
      @click="panel.close" 
      :to="anchor.link">
      <span 
        :class="{ active: anchor.current }" 
        class="symbol"></span>
      {{ index + 1 }} - {{ anchor.label }}
    </Anchor>
  </nav>
</template>

<style scoped>
  nav {
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;

    &>* {
      --color: var(--secondary);

      display: flex;
      justify-content: start;
      align-items: center;
      padding: 8px;
      gap: 8px;
      background: var(--surface-highest);
      border-radius: 4px;
      border-left: 4px solid var(--color);
      transition: 250ms;

      &.current {
        --color: var(--primary);
      }

      &:hover {
        color: var(--color);
        border-left: 12px solid var(--color);
      }

      &:active {
        opacity: 0.7;
        scale: 1 0.9;
      }

      .symbol {
        aspect-ratio: 1;
        width: 0;
        display: block;
        background: var(--color);
        border-radius: 16px;
        transition: 250ms;

        &.active {
          width: 16px;
        }
      }
    }
  }
</style>