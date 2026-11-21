<script setup>
  import { useThemeStore } from "@/stores/useThemeStore";
  import Button from "@/widgets/Button.vue";
  import { MonitorSmartphoneIcon, MoonIcon, SunIcon } from "@lucide/vue";

  const theme = useThemeStore();

</script>

<template>
  <Button @click="theme.toggle">
    <SunIcon v-if="theme.theme == 'light'" />
    <MoonIcon v-if="theme.theme == 'dark'" />
    <MonitorSmartphoneIcon v-if="theme.theme == 'auto'" />
  </Button>
</template>