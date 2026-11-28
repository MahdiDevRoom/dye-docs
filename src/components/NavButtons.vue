<script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import Button from "@/components/Button.vue";
  import Anchor from "@/components/Anchor.vue";
  import { ArrowBigLeftIcon, ArrowBigRightIcon } from "@lucide/vue";

  const route = useRoute();

  const list = {
    "docs":         { link: "/docs",              label: "Docs" },
    "overview":     { link: "/docs/overview",     label: "Overview" },
    "installation": { link: "/docs/installation", label: "Installation" },
    "quick-start":  { link: "/docs/quick-start",  label: "Quick Start" },
    "imports":      { link: "/docs/imports",      label: "Imports and exports" },
    "markup":       { link: "/docs/markup",       label: "Markup syntax" },
    "colors":       { link: "/docs/colors",       label: "Colors and effects" },
    "aliases":      { link: "/docs/aliases",      label: "Aliases and reset" },
    "render":       { link: "/docs/render",       label: "Rendering" },
    "ink":          { link: "/docs/ink",          label: "Ink API" },
    "low-level":    { link: "/docs/low-level",    label: "Low-level API" },
    "utilities":    { link: "/docs/utilities",    label: "Text utilities" },
    "types":        { link: "/docs/types",        label: "TypeScript types" },
    "examples":     { link: "/docs/examples",     label: "Examples" },
    "behavior":     { link: "/docs/behavior",     label: "Behavior and limitations" },
    "project":      { link: "/docs/project",      label: "Project information" },
  };

  const keys = Object.keys(list);

  const currentIndex = computed(() => keys.indexOf(route.name));

  const itemFrom = computed(() => {
    const i = currentIndex.value;
    if (i <= 0) return null;
    return { name: keys[i - 1], ...list[keys[i - 1]] };
  });

  const itemTo = computed(() => {
    const i = currentIndex.value;
    if (i === -1 || i >= keys.length - 1) return null;
    return { name: keys[i + 1], ...list[keys[i + 1]] };
  });
</script>

<template>
  <div class="nav-buttons">
    <Anchor v-if="itemFrom" :to="{ name: itemFrom.name }" no-style>
      <Button size="large">
        <ArrowBigLeftIcon fill="currentColor" />
        <span>{{ itemFrom.label }}</span>
      </Button>
    </Anchor>

    <Anchor v-if="itemTo" :to="{ name: itemTo.name }" no-style>
      <Button size="large">
        <ArrowBigRightIcon fill="currentColor" />
        <span>{{ itemTo.label }}</span>
      </Button>
    </Anchor>
  </div>
</template>

<style scoped>
  .nav-buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
    
    button {
      height: 120px;
      gap: 16px;
      flex-direction: column;
    }
  }
</style>