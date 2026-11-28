<script setup>
  import Anchor from "@/components/Anchor.vue";
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const markup = [
    `import Dye from 'dye';`,
    ``,
    `console.log(Dye.render('<!fg:green>Hello<!> World'));`,
  ].join("\n");

  const ink = [
    `import { Ink } from 'dye';`,
    ``,
    `console.log(Ink.green('Hello, dye!'));`,
    `console.log(Ink.bold.red.bgWhite('Alert'));`,
    `console.log(Ink.rgb(255, 100, 0)('Orange text'));`,
  ].join("\n");

  const style = [
    `import Dye from 'dye';`,
    ``,
    `console.log(Dye.render('Hello', { fg: 'cyan', bold: true }));`,
  ].join("\n");

  const aliases = [
    `console.log(Dye.render('<!error>Something went wrong<!>'));`,
    `console.log(Dye.render('<!success>All good<!>'));`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Quick Start </Text>

    <Text as="p">
      Install Dye first (see <Anchor to="/docs/installation"> Installation </Anchor>), then try any of these. Each
      one prints styled text in your terminal.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> 1. Markup </Text>
    <Text as="p"> Put the style inside the string. <Code src="<!>" /> resets it. </Text>
    <CodeBlock lang="js" :src="markup" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> 2. Ink </Text>
    <Text as="p"> Chain the style, then call it with your text. </Text>
    <CodeBlock lang="js" :src="ink" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> 3. Style object </Text>
    <Text as="p"> Keep the style as data and pass it with the text. </Text>
    <CodeBlock lang="js" :src="style" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> 4. Aliases </Text>
    <Text as="p"> Use a short name for the styles you reach for most. </Text>
    <CodeBlock lang="js" :src="aliases" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Remember to close your tags </Text>

    <Text as="p">
      With markup, a style stays active until you reset it. If you forget <Code src="<!>" />, the color keeps going in
      the terminal after your text. <Code src="Ink" /> closes the style for you.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Where next </Text>
    <ul>
      <li> <Anchor to="/docs/markup"> Markup </Anchor>: the full tag syntax </li>
      <li> <Anchor to="/docs/colors"> Colors </Anchor>: named colors, RGB, and 256-color codes </li>
      <li> <Anchor to="/docs/ink"> Ink </Anchor>: everything you can chain </li>
      <li> <Anchor to="/docs/examples"> Examples </Anchor>: ready-to-use snippets </li>
    </ul>
  </section>
</template>
