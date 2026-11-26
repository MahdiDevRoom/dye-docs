<script setup>
  import Anchor from "@/components/Anchor.vue";
  import Logo from "@/components/Logo.vue";
  import PanelToggle from "@/components/PanelToggle.vue";
  import ThemeToggle from "@/components/ThemeToggle.vue";
  import Text from "@/components/Text.vue";
  import Nav from "@/components/Nav.vue";
  import Button from "@/components/Button.vue";

</script>

<template>
  <header>
    <Anchor class="title" :no-style="true" to="/">
      <Logo class="logo" bg="none" brackets="currentColor" mark="currentColor" />
      <Text as="h1" variant="title">
        <slot />
      </Text>
    </Anchor>
    <div class="buttons">
      <PanelToggle class="panel" />
      <ThemeToggle />
      <Nav class="nav" #default="{ item }">
        <Button variant="ghost"> 
          {{ item.label }} 
          <template #icon-right> 
            <component :is="item.icon" size="20px"/>
          </template>
        </Button>
      </Nav>
    </div>
  </header>
</template>