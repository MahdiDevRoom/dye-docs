<script setup>
  import Anchor from "@/components/Anchor.vue";
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const markupSig = `Dye.render(input: string): string`;
  const textSig = `Dye.render(input: string, style: Style): string`;
  const blockSig = `Dye.render(input: StyledBlock): string`;

  const markup = [
    `Dye.render('<!fg:green>Hello<!> World');`,
    `// '\\x1b[32mHello\\x1b[0m World'`,
  ].join("\n");

  const text = [
    `Dye.render('Hello', { fg: 'red', bold: true });`,
    `// '\\x1b[31m\\x1b[1mHello\\x1b[0m'`,
  ].join("\n");

  const block = [
    `Dye.render({ text: 'Hello', style: { fg: 'red' } });`,
    `// '\\x1b[31mHello\\x1b[0m'`,
  ].join("\n");

  const openTag = [
    `Dye.render('<!fg:red>Danger');      // '\\x1b[31mDanger'         (no reset)`,
    `Dye.render('<!fg:red>Danger<!>');   // '\\x1b[31mDanger\\x1b[0m'`,
  ].join("\n");

  const safe = [
    `const userInput = 'a <!fg:red> b';`,
    `Dye.render(userInput, { bold: true });   // the tag in userInput is left alone`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Render </Text>

    <Text as="p">
      <Code src="Dye.render()" /> is the all-in-one entry point. It has three forms, and all of them return an ANSI
      string.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> render(markup) </Text>
    <Text as="p"> Parses markup and returns the styled string. </Text>
    <CodeBlock :header="false" :numberbar="false" lang="js" :src="markupSig" />
    <br>
    <CodeBlock lang="js" :src="markup" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> render(text, style) </Text>
    <Text as="p">
      Applies a <Code src="Style" /> to a plain string. The text is <strong>not</strong> parsed for markup, and a reset
      is added at the end.
    </Text>
    <CodeBlock :header="false" :numberbar="false" lang="js" :src="textSig" />
    <br>
    <CodeBlock lang="js" :src="text" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> render(block) </Text>
    <Text as="p"> Renders a single <Code src="StyledBlock" />. A reset is added at the end. </Text>
    <CodeBlock :header="false" :numberbar="false" lang="js" :src="blockSig" />
    <br>
    <CodeBlock lang="js" :src="block" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Good to know </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Markup does not close itself </Text>
    <Text as="p">
      The markup form does not add a reset for you. If a tag is left open, the style keeps going in the terminal.
    </Text>
    <CodeBlock lang="js" :src="openTag" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Safe for user input </Text>
    <Text as="p">
      Because <Code src="render(text, style)" /> never parses markup, it is the right form for text you do not control.
    </Text>
    <CodeBlock lang="js" :src="safe" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Anything else </Text>
    <Text as="p">
      If the input is not a string or a block, <Code src="render()" /> returns an empty string. More edge cases are on
      the <Anchor to="/docs/behavior"> Behavior </Anchor> page.
    </Text>
  </section>
</template>
