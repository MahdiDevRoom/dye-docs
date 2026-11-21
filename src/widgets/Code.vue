<script setup>
  import { useHighlight } from "@/composables/useHighlight";

  const props = defineProps({
    code: String,
    lang: String,
  })

  const lines = useHighlight(() => props.code, () => props.lang);
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
    background: var(--surface-low);
    font-weight: 400;
    font-size: 13px;
    padding: 2px 6px;
    border-radius: 4px;
  }
</style>