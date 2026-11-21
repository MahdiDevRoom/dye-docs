<template>
  <section>
    <slot/>
  </section>
</template>

<style>
  section {
    padding: 16px 32px;
    background: var(--surface);
    flex-grow: 1;
    width: 100%;
    max-width: 840px;
  }
</style>