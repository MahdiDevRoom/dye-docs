<script setup>
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const innerTextSig = `Dye.innerText(input: string | StyledBlock[]): string`;

  const innerText = [
    `Dye.innerText('<!fg:red>Hello<!> World');`,
    `// 'Hello World'`,
    ``,
    `Dye.innerText([`,
    `  { text: 'Hello', style: { fg: 'red' } },`,
    `  { text: ' World' },`,
    `]);`,
    `// 'Hello World'`,
  ].join("\n");

  const textLengthSig = `Dye.textLength(input: string | StyledBlock[]): number`;

  const textLength = [
    `Dye.textLength('<!fg:red>Hello<!> World');`,
    `// 11`,
  ].join("\n");

  const createTagSig = `Dye.createTag(style?: Style): string`;

  const createTag = [
    `Dye.createTag({ fg: 'red', bold: true });   // '<!fg:red bold>'`,
    `Dye.createTag({ bg: 'rgb(30 30 46)' });     // '<!bg:rgb(30 30 46)>'`,
    `Dye.createTag({ reset: true });             // '<!reset>'`,
    `Dye.createTag({});                          // ''`,
    `Dye.createTag({ fg: 'pink' });              // ''  (invalid color is dropped)`,
  ].join("\n");

  const createStyleSig = `Dye.createStyle(tag: string): Style`;

  const createStyle = [
    `Dye.createStyle('<!fg:red bold>');   // { fg: 'red', bold: true }`,
    `Dye.createStyle('fg:red bold');      // { fg: 'red', bold: true }`,
  ].join("\n");

  const version = [
    `Dye.version;   // '1.1.3'`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Utilities </Text>

    <Text as="p"> Small helpers for working with styled text. </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> innerText </Text>
    <Text as="p">
      Returns the text without any styling. It accepts a markup string or an array of <Code src="StyledBlock" />.
    </Text>
    <CodeBlock :header="false" :numberbar="false" lang="js" :src="innerTextSig" />
    <br>
    <CodeBlock lang="js" :src="innerText" />
    <Text as="p"> Any other input returns an empty string. </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> textLength </Text>
    <Text as="p"> The length of <Code src="innerText(input)" />. </Text>
    <CodeBlock :header="false" :numberbar="false" lang="js" :src="textLengthSig" />
    <br>
    <CodeBlock lang="js" :src="textLength" />
    <Text as="p">
      This is the JavaScript string length (UTF-16 units), not the width in terminal columns. Emoji and wide characters
      can take a different amount of space on screen.
    </Text>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Tags and styles </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> createTag </Text>
    <Text as="p">
      Builds a markup tag from a <Code src="Style" />. The style is validated first, so invalid colors are dropped. You
      get an empty string when there is nothing to write.
    </Text>
    <CodeBlock :header="false" :numberbar="false" lang="js" :src="createTagSig" />
    <br>
    <CodeBlock lang="js" :src="createTag" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> createStyle </Text>
    <Text as="p">
      The reverse: turns a tag into a <Code src="Style" />. You can pass the tag with or without <Code src="<!" /> and
      <Code src=">" />.
    </Text>
    <CodeBlock :header="false" :numberbar="false" lang="js" :src="createStyleSig" />
    <br>
    <CodeBlock lang="js" :src="createStyle" />
    <ul>
      <li> Invalid values are dropped. </li>
      <li> Aliases are not expanded: <Code src="Dye.createStyle('error')" /> returns an empty object. </li>
      <li> Reset tags (<Code src="<!>" /> and <Code src="<!reset>" />) also return an empty object. </li>
    </ul>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Version </Text>

    <Text as="p"> The installed version is available as a static property. </Text>
    <CodeBlock :header="false" lang="js" :src="version" />
  </section>
</template>
