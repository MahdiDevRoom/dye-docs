<script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import { usePanelStore } from "@/stores/usePanelStore";
  import Anchor from "@/widgets/Anchor.vue";
  const route = useRoute();

  const path = computed(() => route.path)

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
    <Anchor v-for="(anchor, index) in list" :class="{ current: anchor.link == path }" :no-style="true"
      @click="panel.close" :to="anchor.link">
      <div class="title"> <span v-if="anchor.link == path" class="symbol"></span> {{ index + 1 }} - {{ anchor.name }}
      </div>
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
      justify-content: center;
      align-items: center;
      gap: 8px;

      &.current {
        --color: var(--primary);
      }

      .title {
        flex-grow: 1;
        gap: 8px;
        padding: 8px;
        background: var(--surface-highest);
        border-radius: 4px;
        border-left: 4px solid var(--color);
        height: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        transition: 250ms;


        &:hover {
          color: var(--color);
          border-left-width: 12px;
        }

        &:active {
          opacity: 0.7;
          scale: 1 0.9;
        }

        .symbol {
          aspect-ratio: 1;
          width: 32px;
          display: block;
          background: var(--color);
          border-radius: 16px;
        }
      }
    }
  }
</style>