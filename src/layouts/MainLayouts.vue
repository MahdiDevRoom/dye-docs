<script setup>
  import { computed } from "vue"
  import { RouterView, useRoute } from "vue-router";
  import Header from "@/components/Header.vue";
  import Panel from "@/components/Panel.vue";
  import Footer from "@/components/Footer.vue";
  import Main from "@/components/Main.vue";

</script>

<template>
  <Header />
  <Panel />
  <Main>
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