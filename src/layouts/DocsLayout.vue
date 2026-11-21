<script setup>
  import { RouterView, useRoute } from "vue-router";
  import Aside from "@/components/Aside.vue";
  import Article from "@/components/Article.vue";

</script>

<template>
  <Aside />
  <Article>
    <RouterView />
  </Article>
</template>