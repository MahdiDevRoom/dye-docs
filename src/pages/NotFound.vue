<script setup>
  import Anchor from "@/components/Anchor.vue";
  import Shape from "@/components/Shape.vue";
  import Text from "@/components/Text.vue";

</script>

<template>
  <div class="not-found">
    <div class="title"> 404 </div>
    <Text variant="body-large" class="text"> Page not found! </Text>
    <div class="nav">
      <Anchor to="/"> Back to Home </Anchor>
    </div>
  </div>
  <div class="shapes top">
    <div v-for="i in 8" :key="i">
      <Shape class="shape" v-for="j in i" :key="j"/>
    </div>
  </div>
  <div class="shapes bottom">
    <div v-for="i in 8" :key="i">
      <Shape class="shape" v-for="j in i" :key="j"/>
    </div>
  </div>
</template>

<style scoped>
  .not-found {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    z-index: 2;

    .title {
      font-size: 120px;
      font-weight: 900;
    }

  }
  .shapes{
    position: fixed;
    z-index: 1;
    display: flex;
    padding: 16px;
    gap: 16px;
    color: var(--outline);

    &.top {
      top: 0;
      left: 0;
      flex-direction: column-reverse;

      &>* {
        flex-direction: row;
      }
    }
    
    &.bottom {
      bottom: 0;
      right: 0;
      flex-direction: column;

      &>* {
        flex-direction: row-reverse;
      }
    }

    &>* {
      display: flex;
      gap: 16px;
    }

    .shape {
      width: 24px;
    }
  }
</style>