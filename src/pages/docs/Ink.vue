<script setup>
  import Anchor from "@/components/Anchor.vue";
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const effects = ["bold", "dim", "italic", "underline", "blink", "inverse", "hidden", "strikethrough"];

  const standard = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"];
  const bright = [
    "brightBlack", "brightRed", "brightGreen", "brightYellow",
    "brightBlue", "brightMagenta", "brightCyan", "brightWhite",
  ];

  const functions = [
    { name: "rgb(r, g, b)", text: "foreground true color" },
    { name: "bgRgb(r, g, b)", text: "background true color" },
    { name: "code(n)", text: "foreground 256-palette color" },
    { name: "bgCode(n)", text: "background 256-palette color" },
  ];

  const basic = [
    `import { Ink } from 'dye';`,
    ``,
    `console.log(Ink.red('Error'));`,
    `console.log(Ink.bold.underline.cyan('Title'));`,
  ].join("\n");

  const signature = `Ink.<chain>(text?: string | null, reset?: boolean): string`;

  const resetParam = [
    `Ink.red('Hi');         // '\\x1b[31mHi\\x1b[0m'`,
    `Ink.red('Hi', false);  // '\\x1b[31mHi'`,
  ].join("\n");

  const colorFns = [
    `Ink.rgb(255, 100, 0)('Orange');`,
    `Ink.bgRgb(30, 30, 46).code(208)('Orange on dark');`,
  ].join("\n");

  const chaining = [
    `Ink.bold.red.bgWhite('Alert');`,
    `// same look as Dye.render('<!bold fg:red bg:white>Alert<!>')`,
    ``,
    `// setting the same slot twice: the last one wins`,
    `Ink.red.blue('Hi');   // blue`,
  ].join("\n");

  const markupMode = [
    `Ink.markup.red.bold('Error');`,
    `// '<!fg:red bold>Error<!>'`,
    ``,
    `Ink.ansi.red.bold('Error');`,
    `// '\\x1b[31m\\x1b[1mError\\x1b[0m'`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Ink </Text>

    <Text as="p">
      <Code src="Ink" /> builds a style by chaining property names, then renders it when you call it with text.
    </Text>

    <CodeBlock lang="js" :src="basic" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Calling it </Text>
    <CodeBlock :header="false" :numberbar="false" lang="js" :src="signature" />
    <ul>
      <li> <Code src="text" />: the text to style. </li>
      <li> <Code src="reset" />: defaults to <Code src="true" />, which adds a reset after the text. </li>
    </ul>
    <CodeBlock lang="js" :src="resetParam" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Chaining </Text>
    <Text as="p"> The order does not change the look. It only changes the order of the generated tag. </Text>
    <CodeBlock lang="js" :src="chaining" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> What you can chain </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Effects </Text>
    <ul>
      <li v-for="name in effects" :key="name"> <Code :src="`Ink.${name}`" /> </li>
    </ul>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Foreground colors </Text>
    <Text as="p"> The 16 color names, used as they are. </Text>
    <ul>
      <li> <Code :src="`Ink.${standard.join(', Ink.')}`" /> </li>
      <li> <Code :src="`Ink.${bright.join(', Ink.')}`" /> </li>
    </ul>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Background colors </Text>
    <Text as="p">
      The same names with a <Code src="bg" /> prefix and a capital letter, like <Code src="Ink.bgRed" /> and
      <Code src="Ink.bgBrightRed" />.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Functions </Text>
    <ul>
      <li v-for="fn in functions" :key="fn.name">
        <Code :src="`Ink.${fn.name}`" />: {{ fn.text }}
      </li>
    </ul>
    <CodeBlock lang="js" :src="colorFns" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Markup mode </Text>

    <Text as="p">
      <Code src="Ink.markup" /> returns the markup string instead of ANSI codes. It is handy for logs, snapshots, or
      passing the result to <Code src="Dye.render()" /> later. <Code src="Ink.ansi" /> switches back.
    </Text>

    <CodeBlock lang="js" :src="markupMode" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Other members </Text>
    <ul>
      <li> <Code src="Ink.reset" />: start the chain with a reset </li>
      <li> <Code src="Ink.render(markup)" />: a shortcut for <Code src="Dye.render(markup)" /> </li>
    </ul>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Good to know </Text>

    <Text as="p">
      Ink keeps its pending style in shared state, so a few things behave in ways you might not expect:
    </Text>

    <ul>
      <li> A chain is used up by the call. Do not store a chain and reuse it. </li>
      <li> <Code src="Ink.markup" /> stays active until you call <Code src="Ink.ansi" />. </li>
      <li> The text you pass is parsed as markup too. </li>
    </ul>

    <Text as="p">
      Each one is explained, with the fix, on the <Anchor to="/docs/behavior"> Behavior </Anchor> page.
    </Text>
  </section>
</template>
