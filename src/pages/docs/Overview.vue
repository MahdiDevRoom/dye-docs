<script setup>
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const structur = [
    `markup string`,
    `  → parseMarkup → AST`,
    `  → parseAst → StyledBlock[]`,
    `  → parseStyle → ANSI string`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Overview </Text>

    <Text as="p">
      <strong>Dye</strong> is a small TypeScript library for styling terminal text with ANSI escape sequences. It ships
      its own type definitions and is a single class (<Code src="Dye" />) plus a chainable helper (<Code src="Ink" />).
    </Text>

    <Text as="p">
      There are three ways to use it. They all produce the same result, so pick the one that fits the moment.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Markup </Text>
    <CodeBlock :header="false" lang="js" src="Dye.render('<!fg:red>Error<!>')" />
    <Text as="p"> Strings that already contain text and style together. </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Ink </Text>
    <CodeBlock :header="false" lang="js" src="Ink.red.bold('Error')" />
    <Text as="p"> Everyday logging, readable chains. </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Low level </Text>
    <CodeBlock :header="false" lang="js" src="Dye.parseMarkup(...), Dye.parseAst(...)" />
    <Text as="p"> Building your own renderer (HTML, React, tests). </Text>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> The mental model </Text>

    <Text as="p">
      Everything in Dye revolves around one object, the <Code src="Style" />:
    </Text>

    <CodeBlock lang="js" src="{ fg: 'red', bg: 'white', bold: true }" />

    <ul>
      <li> A markup tag is the text form of a <Code src="Style" />: <Code src="<!fg:red bg:white bold>" />. </li>
      <li> <Code src="Ink" /> builds a <Code src="Style" /> for you, then renders it. </li>
    </ul>

    <Text as="p"> The low-level functions convert between the forms: </Text>

    <CodeBlock :header="false" :src="structur" />

    <Text as="p"> <Code src="Dye.render()" /> runs this whole pipeline in one call. </Text>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> What Dye supports </Text>

    <ul>
      <li> The 16 standard terminal colors (foreground and background) </li>
      <li> 24-bit RGB colors: <Code src="rgb(255 100 0)" /> </li>
      <li> 256-color palette codes: <Code src="code(208)" /> </li>
      <li> Eight text effects: <Code src="bold" />, <Code src="dim" />, <Code src="italic" />, <Code src="underline" />,
        <Code src="blink" />, <Code src="inverse" />, <Code src="hidden" />, <Code src="strikethrough" />
      </li>
      <li> Built-in aliases: <Code src="error" />, <Code src="warning" />, <Code src="info" />, <Code src="success" />
      </li>
      <li> Utilities to strip markup, measure text, and convert between tags and styles </li>
    </ul>
  </section>
</template>
