<script setup>
  import { computed, onBeforeUnmount, onMounted, watch } from "vue";
  import { useRoute } from "vue-router";
  import { usePanelStore } from "@/stores/usePanelStore";
  import DocsNav from "@/components/DocsNav.vue";
  import Wave from "@/widgets/Wave.vue";
  import Nav from "@/components//Nav.vue";

  const panel = usePanelStore();

  const route = useRoute();
  const isDocs = computed(() => route.matched.some((r) => r.name === "docs"));

  const onScroll = () => panel.close();

  onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
  onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <div id="panel" :class="{ active: panel.panel }">
    <div @click="panel.close" class="bg"></div>
    <div class="fg">
      <Nav />
      <Wave v-if="isDocs" />
      <DocsNav v-if="isDocs" />
    </div>
  </div>
</template>

<style>
  #panel {

    .bg {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      transition: 250ms;
      height: 100%;
      background: var(--surface);
      z-index: 8;
      opacity: 0;
      touch-action: none;
      pointer-events: none;
    }

    .fg {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      max-height: 70%;
      transition: 250ms;
      background: var(--surface-high);
      border-radius: 12px 12px 0 0;
      border-top: 2px solid var(--surface-highest);
      padding-bottom: 70px;
      translate: 0 100%;
      z-index: 9;
      overflow: auto;
    }

    &.active {
      .bg {
        touch-action: auto;
        pointer-events: all;
        opacity: 0.7;
      }

      .fg {
        translate: 0 0;
      }

    }
  }

  @media (min-width: 720px) {
    #panel {
      display: none;
    }
  }
</style>