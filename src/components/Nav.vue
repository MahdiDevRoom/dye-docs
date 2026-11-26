<script setup>
  import { computed } from "vue";
  import { useRoute } from "vue-router";
  import { usePanelStore } from "@/stores/usePanelStore";
  import { BookAIcon, HomeIcon, UserStarIcon } from "@lucide/vue";
  import GithubIcon from "@/components/GithubIcon.vue";
  import Anchor from "@/components/Anchor.vue";

  const route = useRoute();

  const navs = computed(() => [
    { label: "Home", to: "/", current: route.name === "home", icon: HomeIcon },
    { label: "Docs", to: "/docs", current: route.matched.some((r) => r.name === "docs"), icon: BookAIcon, },
    { label: "About", to: "/about", current: route.name === "about", icon: UserStarIcon, },
    { label: "Github", href: "https://github.com/MahdiDevRoom", target: "_blank", icon: GithubIcon },
  ]);

</script>

<template>
  <nav>
    <Anchor 
      v-for="a in navs" 
      :no-style="true" 
      :key="a.label" 
      :to="a.to" 
      :href="a.href" 
      :target="a.target">
      <slot :item="a">
        <span :class="{ current: a.current }"> {{ a.label }} </span>
      </slot>
    </Anchor>
  </nav>
</template>