<script setup>
  import Anchor from "@/widgets/Anchor.vue";
  import Button from "@/widgets/Button.vue";
  import CodeBlock from "@/widgets/CodeBlock.vue";
  import Logo from "@/widgets/Logo.vue";
  import { ArrowRightIcon } from "@lucide/vue";
  import Section from "@/components/Section.vue";
import Text from "@/widgets/Text.vue";
</script>

<template>
  <Section class="hero-section" aria-labelledby="hero-title">
    <Text as="h1" variant="headline" class="hero-title"> Bring color to your terminal with <strong style="color: var(--primary);"> Dye </strong> </Text>
    
    <div class="hero-row">
      <div class="hero-logo">
        <Logo brackets="var(--outline)" />
      </div>
      
      <div class="hero-description">
        <Text as="p" variant="body-large">
          A small TypeScript library for markup-based terminal styling. Write inline tags,
          compose styles with the Ink API, and render ANSI escape sequences.
        </Text>
      </div>
    </div>
    
    <Text as="div" class="hero-labels">
      <code> LIGHTWEIGHT </code>
      <code> TYPED </code>
      <code> DEPENDENCY-FREE </code>
    </Text>

    <CodeBlock :inline="true" code="npm i github:mahdidevroom/dye" lang="shell" />

    <div class="hero-nav">
      <Anchor :no-style="true" to="/docs">
        <Button variant="primary" size="large">
          Get Started
          <template #icon-right>
            <ArrowRightIcon />
          </template>
        </Button>
      </Anchor>

      <Anchor :no-style="true" href="https://github.com/MahdiDevRoom/dye">
        <Button size="large"> View on GitHub </Button>
      </Anchor>
    </div>
  </Section>
</template>

<style scoped>
  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 16px;
    padding-bottom: 32px;
    background: radial-gradient(circle at right bottom, var(--surface), var(--primary-container), var(--surface));
    border-bottom: 2px solid var(--surface-highest);
    width: 100%;
    max-width: unset;

    .hero-row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 100%;
      max-width: 820px;
      align-items: center;
      padding: 16px 0;
      gap: 16px;
    }

    .hero-nav {
      padding: 32px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }

    .hero-title { text-align: center }

    .hero-labels {
      color: var(--primary);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 8px;
      padding: 32px 8px;
      

      span {
        white-space: pre;
      }
    }

    .hero-logo { width: 280px }

    .hero-description {
      max-width: 300px;
      text-align: justify;
    }
  }
</style>