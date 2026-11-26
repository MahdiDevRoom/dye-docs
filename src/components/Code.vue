<script setup>
  import { useHighlight } from "@/composables/useHighlight";

  const props = defineProps({
    src: String,
    lang: String,
  })

  const lines = useHighlight(() => props.src, () => props.lang);
</script>

<template>
  <code>
    <span
    v-for="(line, i) in lines"
    :key="i"
    class="line">
    <span
      v-for="(token, j) in line"
      :key="j"
      :class="token.className && `tok-${token.className}`">
      {{ token.value }}
    </span>
  </span>
  </code>
</template>

<style scoped>
  code {
    font-family: var(--mono-font);
    background: var(--surface-high);
    font-size: var(--tg-size-body-small);
    font-weight: 400;
    padding: 0 6px;
    border-radius: 4px;
  }
</style>