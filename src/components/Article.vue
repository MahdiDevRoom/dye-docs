<template>
  <article>
    <slot />
  </article>
</template>

<style>
  article {
    grid-column: 2;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow-x: hidden;
    background: var(--surface);
  }
</style>