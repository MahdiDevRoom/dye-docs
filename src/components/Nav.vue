<script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import { usePanelStore } from "@/stores/usePanelStore";
  import Anchor from "@/widgets/Anchor.vue";
  import { GithubIcon, InstagramIcon, TelegrameIcon } from "@/widgets/icons";
  import { BookAIcon, HomeIcon, UserStarIcon } from "@lucide/vue";

  const panel = usePanelStore();
  const route = useRoute();
  const isHome = computed(() => route.name === "home");
  const isDocs = computed(() => route.matched.some((r) => r.name === "docs"));
  const isAbout = computed(() => route.name === "about");

</script>

<template>
  <nav aria-label="Main navigation">

    <Anchor :class="{ active: isHome }" :no-style="true" @click="panel.close" to="/">
      Home
      <HomeIcon color="currentColor" />
    </Anchor>

    <Anchor :class="{ active: isDocs }" :no-style="true" @click="panel.close" to="/docs">
      Docs
      <BookAIcon color="currentColor" />
    </Anchor>

    <Anchor :class="{ active: isAbout }" :no-style="true" @click="panel.close" to="/about">
      About
      <UserStarIcon color="currentColor" />
    </Anchor>

    <Anchor :no-style="true" @click="panel.close" href="https://github.com/MahdiDevRoom" target="_blank">
      Github
      <GithubIcon color="currentColor" />
    </Anchor>

  </nav>
</template>

<style scoped>
  nav {
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;

    &>* {
      --color: var(--secondary);
      color: currentColor;
      border-left: 4px solid var(--color);
      background: var(--surface);
      border-radius: 4px;
      padding: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline-start: 16px;
      font-weight: 900;
      font-size: var(--font-size);
      transition: 250ms;

      &>* {
        transition: 250ms;
      }

      &.active {
        --color: var(--primary);
      }

      &:hover {
        color: var(--color);
        border-left-width: 12px;
        &>* {
          rotate: -25deg;
        }
      }

      &:active {
        opacity: 0.7;
        scale: 1 0.9;
      }
    }
  }
</style>