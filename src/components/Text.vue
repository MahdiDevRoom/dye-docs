<script setup>
  const props = defineProps({
    as: { default: "span" },
    variant: { default: "body" },
  });
</script>

<template>
  <component 
    :is="props.as" 
    :class="props.variant && `tg-${props.variant}`">
    <slot />
  </component>
</template>