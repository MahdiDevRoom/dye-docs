<script setup>
  import { RouterView } from "vue-router";
  import Header from "@/components/Header.vue";
  import Panel from "@/components/Panel.vue";
  import Footer from "@/components/Footer.vue";
  import Lessons from "@/components/Lessons.vue";
  import Wave from "@/components/Wave.vue";
  import NavButtons from "@/components/NavButtons.vue";

</script>

<template>
  <Header> Docs </Header>
  <Panel />
  <main>
    <aside>
      <Lessons />
    </aside>
    <article>
      <RouterView />
      <Wave />
      <section>
        <NavButtons />
      </section>
    </article>
  </main>
  <Footer />
</template>
