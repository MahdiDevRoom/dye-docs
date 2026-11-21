<script setup>
  import Anchor from "@/widgets/Anchor.vue";
import Text from "@/widgets/Text.vue";
import Wave from "@/widgets/Wave.vue";
import { ScaleIcon } from "@lucide/vue";
</script>

<template>
  <footer>
    <Text as="p" variant="body-small"> <strong>Dye</strong> - Terminal styling made simple. </Text>
    <Text as="p" variant="body-small"> Created by <Anchor href="https://github.com/MahdiDevRoom" target="_blank" rel="noreferrer">MahdiDevRoom</Anchor>.</Text>
    <Text as="p" variant="body-small"> 
      <Anchor to="/">Home</Anchor> - 
      <Anchor to="/docs">Docs</Anchor> - 
      <Anchor to="/about">About</Anchor> - 
      <Anchor href="https://github.com/MahdiDevRoom/dye" target="_blank" rel="noreferrer">GitHub</Anchor>
    </Text>
    <Wave class="wave" color="var(--surface)"/>
    <Text as="p" variant="body-smaall"> <ScaleIcon size="18px"/> under the MIT License </Text>
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
  }
</style>