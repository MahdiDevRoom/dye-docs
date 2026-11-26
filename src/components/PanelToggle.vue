<script setup>
  import { usePanelStore } from "@/stores/usePanelStore";
  import { ChevronUpIcon, MenuIcon } from "@lucide/vue";
  import Button from "@/components/Button.vue";

  const panel = usePanelStore();
</script>

<template>
  <Button @click="panel.toggle">
    <div class="icon" :class="{ active: panel.panel }">
      <ChevronUpIcon v-if="panel.panel" />
      <MenuIcon v-else />
    </div>
  </Button>
</template>

<style scoped>
  .icon {
    display: grid;
    place-items: center;
    rotate: 0;
    transition: 250ms;

    &.active {
      rotate: 180deg;
    }
  }
</style>