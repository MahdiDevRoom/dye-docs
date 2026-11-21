<script setup>
import DocsNav from "@/components/DocsNav.vue";

</script>

<template>
  <aside>
    <DocsNav/>
  </aside>
</template>

<style> 
  aside {
    grid-column: 1;
    background: var(--surface);
    margin-right: 16px;
    display: none;
    width: 300px;
  }
  @media (min-width: 720px) {
    aside {
      display: block;
    }
  }
</style>