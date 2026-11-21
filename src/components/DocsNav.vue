<script setup>
  import { usePanelStore } from "@/stores/usePanelStore";
  import Anchor from "@/widgets/Anchor.vue";

  const list = [
    { link: "/docs/overview", name: "Overview" },
    { link: "/docs/installation", name: "Installation" },
    { link: "/docs/quick-start", name: "Quick Start" },
    { link: "/docs/imports", name: "Imports and exports" },
    { link: "/docs/markup", name: "Markup syntax" },
    { link: "/docs/colors", name: "Colors and effects" },
    { link: "/docs/aliases", name: "Aliases and reset" },
    { link: "/docs/render", name: "Rendering" },
    { link: "/docs/ink", name: "Ink API" },
    { link: "/docs/low-level", name: "Low-level parsing API" },
    { link: "/docs/utilities", name: "Text utilities" },
    { link: "/docs/types", name: "TypeScript types" },
    { link: "/docs/examples", name: "Examples" },
    { link: "/docs/behavior", name: "Behavior and limitations" },
    { link: "/docs/project", name: "Project information" },
  ]

  const panel = usePanelStore();
</script>

<template>
  <nav aria-label="Documentation table of contents">
    <Anchor v-for="(anchor, index) in list" :no-style="true" @click="panel.close" :to="anchor.link">
      <div class="index"> {{ index + 1 }} </div>
      <div class="title"> {{ anchor.name }} </div>
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
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      gap: 8px;

      .index {
        aspect-ratio: 1;
        height: 100%;
        display: grid;
        place-items: center;
        color: var(--secondary);
        background: var(--surface-highest);
        border-radius: 4px;
      }

      .title {
        flex-grow: 1;
        padding-inline: 16px;
        background: var(--surface-highest);
        border-radius: 4px;
        border-left: 4px solid var(--secondary);
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        transition: 250ms;

        &:hover {
          color: var(--secondary);
          border-left-width: 12px;
        }

        &:active {
          opacity: 0.7;
          scale: 0.9;
        }
      }
    }
  }
</style>