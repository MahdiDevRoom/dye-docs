<script setup>
  import { RouterView } from "vue-router";
  import { useStatusbarStore } from "@/stores/useStatusbarStore";
  import { useTheme } from "@/composables/useTheme";
 
  useStatusbarStore().set("surface");
  useTheme();
</script>

<template>
  <RouterView />
</template>