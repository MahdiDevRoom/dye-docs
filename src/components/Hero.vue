<script setup>
  import Anchor from "@/components/Anchor.vue";
  import Button from "@/components/Button.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import GithubIcon from "@/components/GithubIcon.vue";
  import Logo from "@/components/Logo.vue";
  import { ArrowRightIcon } from "@lucide/vue";
</script>

<template>
  <section class="hero">
    <div class="logo">
      <Logo brackets="var(--outline)" />
      <Text class="title" variant="display"> Style your terminal output with Dye. </Text>
    </div>

    <Text class="description">
      A small, expressive API for colored and formatted terminal text. Write
      styles with readable markup or build them through the chainable Ink API.
    </Text>

    <div class="install">
      <CodeBlock :inline="true" src="npm i github:mahdidevroom/dye" lang="shell" />
    </div>
    <div class="actions">
      <Anchor to="/docs" noStyle>
        <Button size="large" variant="primary">
          Read the docs
          <ArrowRightIcon />
        </Button>
      </Anchor>
      <Anchor href="https://github.com/MahdiDevRoom/dye" noStyle>
        <Button size="large" variant="ghost">
          GitHub
          <GithubIcon />
        </Button>
      </Anchor>
    </div>
  </section>
</template>

<style scoped>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    padding: 32px;
    padding-bottom: 32px;
    background: radial-gradient(circle at right bottom, var(--surface), var(--primary-container), var(--surface));
    border-bottom: 2px solid var(--surface-highest);
    width: 100%;
    max-width: unset;

    .actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }

    .title {
      text-align: center;
      max-width: 420px;
      text-shadow: 0 2px var(--primary);

    }

    .logo {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 32px;

      svg {
        height: 280px;
        width: 280px;
      }
    }

    .description {
      max-width: 320px;
      text-align: center;
    }

    .sub-title {
      padding: 8px;
      color: var(--primary);
    }
  }
</style>