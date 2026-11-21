<script setup>
  import { BookOpenTextIcon, HomeIcon, UserStarIcon } from "@lucide/vue";
  import PanelToggle from "@/widgets/PanelToggle.vue";
  import ThemeToggle from "@/widgets/ThemeToggle.vue";
  import Logo from "@/widgets/Logo.vue";
  import Anchor from "@/widgets/Anchor.vue";
  import Button from "@/widgets/Button.vue";
  import { GithubIcon, InstagramIcon, TelegrameIcon } from "@/widgets/icons";
import HeaderNav from "./HeaderNav.vue";

</script>

<template>
  <header>
    <Anchor :no-style="true" class="logo" to="/">
      <Logo bg="none" brackets="currentColor" mark="currentColor" />
    </Anchor>
    <Anchor :no-style="true" to="/" class="title"> Dye </Anchor>
    <div class="buttons">
      <PanelToggle class="panel" />
      <ThemeToggle />
      <HeaderNav class="nav"/>
    </div>
  </header>
</template>

<style>
  header {
    grid-area: head;
    position: sticky;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 72px;

    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background: var(--surface-high);
    box-shadow: 0 0 0 2px var(--surface-highest);
    padding: 12px;
    gap: 8px;
    z-index: 10;

    .logo {
      display: grid;
      place-items: center;
      aspect-ratio: 1;
      color: currentColor;
      background: var(--surface-low);
      border-radius: 10px;
      cursor: pointer;
      text-decoration: none;
      border: 2px solid var(--surface-highest);
    }

    .title {
      flex-grow: 1;
      align-self: center;
      padding-inline: 0;
      font-size: 24px;
      padding-inline: 8px;
      font-weight: 700;
      cursor: pointer;
      color: currentColor;
      text-decoration: none;
    }

    .nav {
      display: none;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      height: 100%;
      gap: 16px;
      
    }

    .buttons {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: stretch;
      padding: 4px;
      gap: 8px;
    }
  }

  @media (min-width: 720px) {

    header {
      .nav {
        display: flex;
      }

      .panel {
        display: none;
      }
    }
  }
</style>