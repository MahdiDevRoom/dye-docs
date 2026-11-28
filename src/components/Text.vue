<script setup>
import Shape from "@/components/Shape.vue";

  const props = defineProps({
    as: { default: "span" },
    variant: { default: "body" },
    shape: { default: false, type: Boolean },
    shapeVariant: { default: "primary" },
  });
</script>

<template>
  <component 
    :is="props.as" 
    class="text"
    :class="props.variant && `tg-${props.variant}`">
    <Shape 
      v-if="props.shape" 
      class="shape" :class="`variant-${props.shapeVariant}`"/> 
    <slot />
  </component>
</template>

<style scoped>
  .text {
    .shape {
      margin-inline-end: 0.3em;
      width: 1.3em;
      vertical-align: text-bottom;

      &.variant-primary{ color: var(--primary) }
      &.variant-secondary{ color: var(--secondary) }
      &.variant-error{ color: var(--error) }
    }
  }
</style>