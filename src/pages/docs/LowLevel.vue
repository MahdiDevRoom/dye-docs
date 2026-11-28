<script setup>
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const pipeline = [
    `markup`,
    `  → parseMarkup → AstNode[]`,
    `  → parseAst → StyledBlock[]`,
    `  → parseStyle → ANSI`,
  ].join("\n");

  const parseMarkupSig = `Dye.parseMarkup(markup: string): AstNode[]`;

  const parseMarkup = [
    `Dye.parseMarkup('<!fg:cyan bold>Dye<!> docs');`,
    `// [`,
    `//   { type: 'tag',  value: { fg: 'cyan', bold: true } },`,
    `//   { type: 'text', value: 'Dye' },`,
    `//   { type: 'tag',  value: { reset: true } },`,
    `//   { type: 'text', value: ' docs' }`,
    `// ]`,
  ].join("\n");

  const parseAstSig = `Dye.parseAst(ast: AstNode[]): StyledBlock[]`;

  const parseAst = [
    `const ast = Dye.parseMarkup('<!fg:red>Hello<!> World');`,
    `Dye.parseAst(ast);`,
    `// [`,
    `//   { text: 'Hello',  style: { fg: 'red' } },`,
    `//   { text: '',       style: { reset: true } },`,
    `//   { text: ' World', style: {} }`,
    `// ]`,
  ].join("\n");

  const parseStyleSig = `Dye.parseStyle(input: StyledBlock[] | Style | undefined): string`;

  const parseStyle = [
    `Dye.parseStyle({ fg: 'red', bold: true });`,
    `// '\\x1b[31m\\x1b[1m'`,
    ``,
    `Dye.parseStyle({ reset: true });`,
    `// '\\x1b[0m'`,
    ``,
    `Dye.parseStyle([`,
    `  { text: 'Hi', style: { fg: 'green' } },`,
    `  { text: '',   style: { reset: true } },`,
    `]);`,
    `// '\\x1b[32mHi\\x1b[0m'`,
  ].join("\n");

  const full = [
    `const ast    = Dye.parseMarkup('<!fg:cyan bold>Dye<!> docs');`,
    `const blocks = Dye.parseAst(ast);`,
    `const ansi   = Dye.parseStyle(blocks);`,
    `// '\\x1b[36m\\x1b[1mDye\\x1b[0m docs'`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Low Level API </Text>

    <Text as="p">
      The low-level functions expose each stage of the pipeline. Use them when you want something other than ANSI
      output, like HTML, React nodes, or a test fixture.
    </Text>

    <CodeBlock :header="false" :numberbar="false" :src="pipeline" />

    <Text as="p"> <Code src="Dye.render()" /> runs all three stages for you. </Text>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> parseMarkup </Text>

    <Text as="p">
      Splits a markup string into AST nodes. It returns an empty array if the input is not a string.
    </Text>

    <CodeBlock :header="false" :numberbar="false" lang="js" :src="parseMarkupSig" />
    <br>
    <CodeBlock lang="js" :src="parseMarkup" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Things to know </Text>
    <ul>
      <li> Aliases are expanded here. </li>
      <li>
        Values are not validated here: <Code src="<!fg:pink>" /> still gives <Code src="{ fg: 'pink' }" />.
        Validation happens in <Code src="parseAst" />.
      </li>
      <li> A tag with no word characters, like <Code src="<!:>" />, is kept as plain text. </li>
    </ul>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> parseAst </Text>

    <Text as="p">
      Walks the AST and works out the <strong>cumulative style</strong> for each piece of text. Invalid values are
      dropped here. It returns an empty array if the input is not an array.
    </Text>

    <CodeBlock :header="false" :numberbar="false" lang="js" :src="parseAstSig" />
    <br>
    <CodeBlock lang="js" :src="parseAst" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Things to know </Text>
    <ul>
      <li> Every text block carries its full style, not just what changed. </li>
      <li> A reset becomes an empty block with <Code src="style: { reset: true }" />. </li>
      <li>
        A tag at the very end, with no text after it, becomes an empty block that carries the style, so its escape
        code is still emitted.
      </li>
    </ul>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> parseStyle </Text>

    <Text as="p"> Converts a <Code src="Style" /> or an array of blocks into an ANSI string. </Text>

    <CodeBlock :header="false" :numberbar="false" lang="js" :src="parseStyleSig" />
    <br>
    <CodeBlock lang="js" :src="parseStyle" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Things to know </Text>
    <ul>
      <li> For a single <Code src="Style" />, you get only the escape codes, with no text. </li>
      <li> For an array, each block's codes are followed by its text. </li>
      <li> <Code src="undefined" /> gives an empty string. </li>
      <li> Invalid colors produce no output. </li>
    </ul>

    <Text as="h3" variant="title" shape shape-variant="secondary"> The full pipeline </Text>
    <CodeBlock lang="js" :src="full" />
  </section>
</template>
