<script setup>
  const props = defineProps({
    as: { type: [String, Object, Function], default: "span" },
    variant: { type: String, default: "body" },
  });
</script>

<template>
  <component :is="props.as" :class="props.variant && `tg-${props.variant}`">
    <slot />
  </component>
</template>