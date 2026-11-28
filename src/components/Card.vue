<script setup>
  import { computed } from "vue";
  import Anchor from "@/components/Anchor.vue";
  import Text from "@/components/Text.vue";
  import Shape from "@/components/Shape.vue";

  const props = defineProps({
    title: { type: String, default: undefined },
    icon: { type: [Object, Function], default: undefined },
    to: { type: [String, Object], default: undefined },
    href: { type: String, default: undefined },
  });

  const clickable = computed(() => props.to !== undefined || props.href !== undefined);
  const root = computed(() => (clickable.value ? Anchor : "div"));
  const rootProps = computed(() => clickable.value ? { to: props.to, href: props.href, noStyle: true } : {});
</script>

<template>
  <component :is="root" v-bind="rootProps" class="card" :class="{ clickable }">
    <div v-if="props.icon || props.title" class="header">
      <component :is="props.icon" v-if="props.icon" />
      <Text v-if="props.title" as="div" class="title" variant="title-small">
        {{ props.title }}
      </Text>
    </div>

    <Text as="div" variant="body" class="body">
      <slot />
    </Text>

    <div class="watermark">
      <Shape />
    </div>
  </component>
</template>

<style scoped>
  .card {
    display: block;
    padding: 8px;
    background: var(--surface-high);
    border-radius: 4px;
    border-left: 4px solid var(--outline);
    position: relative;
    z-index: 1;

    .header {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 8px;
      color: var(--primary);
    }

    .body {
      padding: 8px;
    }

    .watermark {
      position: absolute;
      bottom: 0;
      right: 8px;
      aspect-ratio: 1;
      width: 48px;
      padding: 4px;
      color: var(--outline-low);
      z-index: -1;
      transition: 250ms;
    }
  }

  .card.clickable {
    cursor: pointer;
    transition: 150ms;

    &:hover {
      background: var(--surface-highest);
      border-left-color: var(--primary);
      .watermark {
        color: var(--outline);
      }
    }

    &:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }

    &:active {
      opacity: 0.8;
      scale: 0.95 0.9;
    }
  }
</style>