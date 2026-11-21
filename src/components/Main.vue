<template>
  <main>
    <slot />
  </main>
</template>

<style>
  main {
    grid-area: main;
    display: grid;
    grid-template-columns: auto 1fr;
    background-size: 10px 10px;
    background-image: repeating-linear-gradient(45deg, var(--surface-high) 0, var(--surface-high) 2px, var(--surface) 0, var(--surface) 50%);
  }

  @media (min-width: 720px) {
    main {
      padding-inline: 64px;
      min-height: 100vh;
      & > * {
        border-left: 2px solid var(--surface-highest);
        border-right: 2px solid var(--surface-highest);
      }
    }
  }
</style>