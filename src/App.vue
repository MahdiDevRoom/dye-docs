<script setup>
  import { RouterView } from "vue-router";
  import { useTheme } from "@/composables/useTheme";
  import { useStatusbarStore } from "@/stores/useStatusbarStore";

  const statusbar = useStatusbarStore();
  statusbar.set("surface")
  useTheme();
</script>

<template>
  <RouterView/>
</template>