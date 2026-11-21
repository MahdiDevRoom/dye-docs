<script setup>
  import { computed, useAttrs } from "vue";
  import { RouterLink } from "vue-router";

  defineOptions({ inheritAttrs: false });

  const props = defineProps({
    href: {
      type: String,
      default: undefined
    },
    to: {
      type: [String, Object],
      default: undefined
    },
    noStyle: {
      type: Boolean,
      default: false
    }
  });

  const attrs = useAttrs();

  const anchor = computed(() => {
    if (props.href !== undefined) return "a";
    else if (props.to !== undefined) return RouterLink;
    return "a";
  });

  const bindProps = computed(() => {
    if (anchor.value === "a") {
      return { ...attrs, href: props.href }
    } else {
      return { ...attrs, to: props.to }
    }
  });

</script>

<template>
  <component :class="{ 'no-style': props.noStyle }" :is="anchor" v-bind="bindProps">
    <slot />
  </component>
</template>

<style scoped>
  a {
    position: relative;
    color: var(--secondary);
    text-decoration: none;
    cursor: pointer;

    &::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 50%;
      translate: -50% 0;
      height: 1px;
      border-radius: 2px;
      width: 0%;
      background: currentColor;
      transition: 250ms;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }

  .no-style {
    color: inherit;
    text-decoration: inherit;

    &::before {
      display: none;
    }
  }
</style>