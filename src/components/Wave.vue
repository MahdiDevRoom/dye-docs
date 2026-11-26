<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: "var(--outline-low)",
    }
  });

  const svg = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 40"><path fill="#000" d="M 0,14 0,25 20,10 60,40 80,25 80,14 60,30 20,0 0,14 Z"/></svg>');
  const url = `url("data:image/svg+xml,${svg}")`;
</script>

<template>
  <div class="wave" :style="{color: props.color, maskImage: url}"></div>
</template>

<style>
  .wave {
    background: currentColor;
    width: 100%;
    height: 10px;
    mask-repeat: repeat-x;
    mask-size: 20px 10px;
  }
</style>