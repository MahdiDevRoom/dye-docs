<script setup>
  import Text from "@/components/Text.vue";

  const props = defineProps({
    title: { default: undefined },
    icon: { default: undefined },
  });
</script>

<template>
  <div class="card">
    <div class="header">
      <component :is="props.icon"/>
      <Text as="div" class="title" v-if="props.title" variant="title-small">
        {{ props.title }}
      </Text>
    </div>
    <Text as="div" variant="body" class="body">
      <slot />
    </Text>
  </div>
</template>

<style scoped>
  .card {
    padding: 8px;
    background: var(--surface-high);
    border-radius: 4px;
    border-left: 4px solid var(--outline) ;

    .header {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 8px;
      color: var(--primary);
    }

    .body {
      padding: 8px;
    }
  }
</style>