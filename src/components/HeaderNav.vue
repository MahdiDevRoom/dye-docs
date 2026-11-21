<script setup>
  import Anchor from "@/widgets/Anchor.vue";
  import Button from "@/widgets/Button.vue";
  import { GithubIcon } from "@/widgets/icons";
  import { BookOpenTextIcon, HomeIcon, UserStarIcon } from "@lucide/vue";

</script>

<template>
  <Anchor :class="$attrs.class" :no-style="true" to="/">
    <Button variant="ghost"> Home
      <template #icon-right>
        <HomeIcon size="20px" />
      </template>
    </Button>
  </Anchor>
  <Anchor :class="$attrs.class" :no-style="true" to="/docs">
    <Button variant="ghost"> Docs
      <template #icon-right>
        <BookOpenTextIcon size="20px" />
      </template>
    </Button>
  </Anchor>
  <Anchor :class="$attrs.class" :no-style="true" to="/about">
    <Button variant="ghost"> About
      <template #icon-right>
        <UserStarIcon size="24px" />
      </template>
    </Button>
  </Anchor>
  <Anchor :class="$attrs.class" :no-style="true" href="https://github.com/MahdiDevRoom">
    <Button variant="ghost"> Github
      <template #icon-right>
        <GithubIcon color="currentColor" size="20px"/>
      </template>
    </Button>
  </Anchor>
</template>