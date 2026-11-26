<script setup>
  import { computed, onBeforeUnmount, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { usePanelStore } from "@/stores/usePanelStore";
  import Nav from "@/components/Nav.vue";
  import Wave from "@/components/Wave.vue";
  import Lessons from "@/components/Lessons.vue";

  const panel = usePanelStore();
  const route = useRoute();
  const onScroll = () => panel.close();

  const DocsRoute = computed(() => route.matched.some((r) => r.name === "docs"))

  onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
  onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <div class="panel" :class="{ active: panel.panel }">
    <div @click="panel.close" class="bg"></div>
    <div class="fg">
      <Nav class="nav" @click="panel.close" as="div" #default="{ item }">
        <div class="button" :class="{ current: item.current }">
          <span> {{ item.label }} </span>
          <component :is="item.icon" size="24px" />
        </div>
      </Nav>
      <Wave v-if="DocsRoute"/>
      <Lessons v-if="DocsRoute"/>
    </div>
  </div>
</template>

<style scoped>
  .panel {
    position: absolute;

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

  .nav {
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    .button {
      --color: var(--secondary);
      background: var(--surface-highest);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px;
      border-radius: 4px;
      border-left: 4px solid var(--color);
      font-size: var(--tg-size-body-large);
      font-weight: var(--tg-weight-title);

      transition: 250ms;

      &:hover {
        color: var(--color);
        border-left: 12px solid var(--color);
      }

      &:active {
        opacity: 0.7;
        scale: 1 0.9;
      }

      &.current {
        background: var(--primary-container);
        color: var(--on-primary-container);
        --color: var(--primary);
      }
    }
  }


  @media (min-width: 720px) {
    .panel {
      display: none;
    }
  }
</style>