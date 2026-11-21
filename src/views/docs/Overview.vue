<script setup>
  import Article from "@/components/Article.vue";
import Section from "@/components/Section.vue";
  import Code from "@/widgets/Code.vue";
  import CodeBlock from "@/widgets/CodeBlock.vue";

</script>

<template>
  <Article>
    <Section>
      <h2> 1. Overview </h2>
      <p>
        <Code code="dye" /> converts inline style markup or structured style objects into ANSI
        escape sequences for terminal output. It exposes two high-level interfaces:
        the static <Code code="Dye" /> class and the chainable <Code code="Ink" /> proxy.
      </p>
  
      <h3> Public interfaces </h3>
      <CodeBlock title="Dye" lang="js" code="Dye.render('<!fg:red>Error<!>s')" />
      <p>Parse markup and render styled text</p>
  
      <CodeBlock title="Ink" lang="js" code="Ink.red('Error')" />
      <p>Chain colors and effects, then render text</p>
  
      <CodeBlock title="Style" lang="js" code="{ fg: 'red', bold: true }" />
      <p>Describe colors, effects, and reset behavior as an object</p>
    </Section>
  </Article>
</template>