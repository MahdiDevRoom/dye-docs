<script setup>
  const { size, variant } = defineProps({
    size: {
      type: String,
      default: "medium",
      validator: (v) => ["small", "medium", "large"].includes(v),
    },
    variant: {
      type: String,
      default: "surface",
      validator: (v) => ["surface", "primary", "ghost"].includes(v),
    }
  });
</script>

<template>
  <button type="button" :class="`btn-${size} btn-${variant}`">
    <slot name="icon-left" />
     <slot/>
    <slot name="icon-right" />
  </button>
</template>

<style scoped>
  button {
    --outline-width: 2px;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: var(--outline-width) solid var(--outline-color);
    box-shadow: 0px calc(var(--outline-width) * 2) 0px var(--outline-color);
    border-radius: 6px;
    background: var(--surface-low);
    position: relative;
    cursor: pointer;
    top: calc(var(--outline-width) * -2);
    transition: 150ms;
    gap: 8px;

    &:active {
      top: 0;
      box-shadow: 0px 0px 0px var(--outline-color);
      opacity: 0.7;
    }

    &.btn-small {
      --outline-width: 1px;
      padding: 0 8px;
      font-size: 12px;
      height: 28px;
    }

    &.btn-medium {
      padding: 8px 12px;
      font-size: 16px;
      height: 40px;
    }

    &.btn-large {
      padding: 14px 20px;
      font-size: 18px;
      height: 58px;
    }

    &.btn-surface {
      --outline-color: var(--outline);
      background: var(--surface-low);
      color: var(--on-surface);
    }

    &.btn-primary {
      --outline-color: var(--primary);
      background: var(--primary-container);
      color: var(--on-primary-container);
    }

    &.btn-ghost {
      --outline-color: var(--outline-low);
      background: var(--surface);
      color: var(--on-surface);
    }
  }
</style>