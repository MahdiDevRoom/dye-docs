<script setup>
  import Anchor from "@/components/Anchor.vue";
import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";
</script>

<template>
  <section>
    <Text as="h2" variant="headline"> What is Dye? </Text>

    <Text as="p"> Dye is a small library for styling text in the terminal. </Text>
    <Text as="p">
      Most libraries make you chain function calls, or glue raw escape codes together by hand. Dye takes a
      different route: you write the style inside the string, as a tag, and Dye turns it into ANSI escape codes.
    </Text>

    <CodeBlock title="Hello.js" lang="js" src="Dye.render(<!fg:green>Hello<!> World');" />

    <Text as="p">
      If you prefer chaining, Dye has that too. Ink is a chainable helper that sits on top of the same
      engine, so both styles share colors, effects and rendering.
    </Text>

  </section>

  <Wave />
  <section>

    <Text as="h3" variant="headline-small"> Principles </Text>

    <Text as="h4" variant="title"> Markup first </Text>

    <Text as="p">
      Style and text live together, so a line reads the way it will look. A message with three colors is still one
      readable string.
    </Text>

    <Text as="h4" variant="title"> One engine </Text>

    <Text as="p">
      <Code src="Dye"/> (markup) and <Code src="Ink"/> (chains) share the same colors, effects and rendering pipeline. Pick whichever fits your
      code, or mix them.
    </Text>

    <Text as="h4" variant="title"> Small surface </Text>

    <Text as="p">
      <Code src="Dye"/> is a single class of static methods, with no instances and no setup. There is nothing to configure before
      the
      first call.
    </Text>

    <Text as="h4" variant="title"> Quiet on bad input </Text>

    <Text as="p">
      Unknown attributes and invalid colors are ignored. They are not thrown and not logged. A typo in a style should
      never crash your CLI.
    </Text>

    <Text as="h4" variant="title"> Open to other renderers </Text>

    <Text as="p">
      The low-level API exposes plain data (an AST, then styled blocks), so you can render the same markup to ANSI,
      HTML,
      or anything else.
    </Text>
  </section>
  <Wave />
  <section>
    <Text as="h3" variant="headline-small"> Status </Text>

    <ul>
      <li><b>Current version:</b> 1.1.3</li>
      <li><b>License:</b> MIT</li>
      <li><b>Written in:</b> TypeScript, with types included</li>
      <li><b>Where it lives:</b> GitHub, under the <Code src="MahdiDevRoom"/> account</li>
    </ul>

    <Text as="p">
      Dye is young and intentionally small. If you hit something confusing, the <b>Behavior</b> page in the docs lists the
      edge cases, such as unclosed tags and how <Code src="Ink"/> handles shared state.
    </Text>
  </section>

  <Wave />

  <section>
    <Text> About as="h3" variant="headline-small"this site </Text>

    <Text as="p">
      The documentation site is built with <b>Vue 3</b>, <b>Vite</b> and <b>Vue Router</b>. Code samples are highlighted with
      <b>TanStack Highlight</b>, using colors taken from the site's own light and dark theme.
    </Text>

    <Text as="p">
      It is also a hands-on practice project, so you may notice things being tidied and rebuilt as it grows.
    </Text>
  </section>

  <Wave />

  <section>
    <Text as="h3" variant="headline-small"> Author </Text>

    <Text>Dye is written and maintained by <b>MahdiDevRoom</b>. </Text>

    <ul>
      <li> <Anchor href="https://github.com/MahdiDevRoom"> GitHub </Anchor> </li>
      <li> <Anchor href="https://github.com/MahdiDevRoom/dye"> Repository </Anchor> </li>
    </ul>
  </section>

  <Wave />

  <section>
    <Text as="h3" variant="headline-small"> License </Text>

    <Text as="p">
      Dye is released under the <b>MIT License</b>. You are free to use it in personal and commercial projects.
    </Text>
  </section>
</template>