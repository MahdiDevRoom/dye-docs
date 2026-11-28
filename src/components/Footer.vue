<script setup>
  import { ScaleIcon } from "@lucide/vue";
  import Text from "@/components/Text.vue";
  import Anchor from "@/components/Anchor.vue";
  import Wave from "@/components/Wave.vue";
  import Shape from "@/components/Shape.vue";
</script>

<template>
  <footer>
    <Text as="p" variant="body-small"> <strong>Dye</strong> - Terminal styling made simple. </Text>
    <Text as="p" variant="body-small"> Created by
      <Anchor href="https://github.com/MahdiDevRoom" target="_blank">MahdiDevRoom</Anchor>.
    </Text>
    <Text as="p" variant="body-small">
      <Anchor to="/">Home</Anchor> -
      <Anchor to="/docs">Docs</Anchor> -
      <Anchor to="/about">About</Anchor> -
      <Anchor href="https://github.com/MahdiDevRoom/dye" target="_blank">GitHub</Anchor>
    </Text>
    
    <Wave class="wave" color="var(--surface-high)" />
    
    <Text as="p" variant="body-smaall">
      <ScaleIcon size="18px" /> Under the MIT License
    </Text>
    
    <Wave class="wave" color="var(--surface-high)" />
    
    <div class="watermark">
      <Shape size="24px" v-for="j in 3" :key="j" />
    </div>
  </footer>
</template>

<style>
  footer {
    grid-area: foot;
    padding: 32px;
    background: var(--surface-low);
    color: var(--on-surface-low);
    border-top: 2px solid var(--surface-highest);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wave {
      width: 100%;
      max-width: 300px;
    }

    .watermark {
      display: flex;
      justify-content: space-between;
      padding: 16px;
      gap: 16px;
      color: var(--outline-low);
    }
  }
</style>