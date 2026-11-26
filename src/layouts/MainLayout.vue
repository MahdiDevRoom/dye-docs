<script setup>
  import { RouterView } from "vue-router";
  import Header from "@/components/Header.vue";
  import Panel from "@/components/Panel.vue";
  import Footer from "@/components/Footer.vue";

</script>

<template>
  <Header> Dye </Header>
  <Panel />
  <main>
    <article>
      <RouterView />
    </article>
  </main>
  <Footer />
</template>