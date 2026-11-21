<script setup>
  import { computed } from "vue"
  import { RouterView, useRoute } from "vue-router";
  import { useTheme } from "@/composables/useTheme";
  import { useStatusbarStore } from "@/stores/useStatusbarStore";
  import Header from "@/components/Header.vue";
  import Panel from "@/components/Panel.vue";
  import Footer from "@/components/Footer.vue";
  import Main from "@/components/Main.vue";
  import Aside from "@/components/Aside.vue";

  const route = useRoute();
  const isDocs = computed(() => route.matched.some((r) => r.name === "docs"));
  const statusbar = useStatusbarStore();
  statusbar.set("surface")
  useTheme();
</script>

<template>
  <Header />
  <Panel />
  <Main>
    <Aside v-if="isDocs" />
    <RouterView />
  </Main>
  <Footer />
</template>

<style>
  #app {
    display: grid;
    grid-template-rows: 1fr auto auto;
    grid-template-columns: 1fr;
    grid-template-areas: "main" "foot" "head";
    min-height: 100vh;
    transition: 250ms;
  }

  @media (min-width: 720px) {
    #app {
      grid-template-rows: auto 1fr auto;
      grid-template-areas: "head" "main" "foot";
    }
  }
</style>