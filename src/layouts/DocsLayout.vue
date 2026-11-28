<script setup>
  import { RouterView } from "vue-router";
  import Header from "@/components/Header.vue";
  import Panel from "@/components/Panel.vue";
  import Footer from "@/components/Footer.vue";
  import Lessons from "@/components/Lessons.vue";
  import Wave from "@/components/Wave.vue";
  import NavButtons from "@/components/NavButtons.vue";
  import Shape from "@/components/Shape.vue";

</script>

<template>
  <Header> Docs </Header>
  <Panel />
  <main>
    <aside>
      <Lessons />
    </aside>
    <article>
      <div class="watermark">
        <Shape v-for="i in 5" :key="i"/>
      </div>
      <RouterView />
      <Wave />
      <section>
        <NavButtons />
      </section>
    </article>
  </main>
  <Footer />
</template>

<style scoped>
  .watermark {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    gap: 16px;
    color: var(--primary-container);
    
    &>* {
      width: 24px;
    }
  }
</style>