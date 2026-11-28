<script setup>
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const names = [
    `type EffectName =`,
    `  | 'bold'  | 'dim'     | 'italic' | 'underline'`,
    `  | 'blink' | 'inverse' | 'hidden' | 'strikethrough';`,
    ``,
    `type ColorName =`,
    `  | 'black' | 'brightBlack' | 'red'     | 'brightRed'`,
    `  | 'green' | 'brightGreen' | 'yellow'  | 'brightYellow'`,
    `  | 'blue'  | 'brightBlue'  | 'magenta' | 'brightMagenta'`,
    `  | 'cyan'  | 'brightCyan'  | 'white'   | 'brightWhite';`,
  ].join("\n");

  // these lines contain backticks and template placeholders, so they use plain quotes
  const colorValues = [
    'type RgbValue  = `rgb(${number} ${number} ${number})`;',
    'type CodeValue = `code(${number})`;',
    '',
    'type ColorValue =',
    '  | ColorName',
    '  | RgbValue',
    '  | CodeValue',
    '  | (string & {});',
  ].join("\n");

  const style = [
    `interface Style {`,
    `  reset?: boolean;`,
    `  fg?: ColorValue;`,
    `  bg?: ColorValue;`,
    `  bold?: boolean;`,
    `  dim?: boolean;`,
    `  italic?: boolean;`,
    `  underline?: boolean;`,
    `  blink?: boolean;`,
    `  inverse?: boolean;`,
    `  hidden?: boolean;`,
    `  strikethrough?: boolean;`,
    `}`,
  ].join("\n");

  const ast = [
    `interface AstTagNode  { type: 'tag';  value: Style  }`,
    `interface AstTextNode { type: 'text'; value: string }`,
    ``,
    `type AstNode = AstTagNode | AstTextNode;`,
    ``,
    `interface StyledBlock {`,
    `  text: string;`,
    `  style?: Style;`,
    `}`,
  ].join("\n");

  const ink = [
    `interface InkType {`,
    `  // effects`,
    `  bold: InkType; dim: InkType; italic: InkType; underline: InkType;`,
    `  blink: InkType; inverse: InkType; hidden: InkType; strikethrough: InkType;`,
    ``,
    `  // colors (16 names each)`,
    `  red: InkType;    brightRed: InkType;     // ...and the rest`,
    `  bgRed: InkType;  bgBrightRed: InkType;   // ...and the rest`,
    ``,
    `  // functions`,
    `  rgb(r: number, g: number, b: number): InkType;`,
    `  bgRgb(r: number, g: number, b: number): InkType;`,
    `  code(c: number): InkType;`,
    `  bgCode(c: number): InkType;`,
    ``,
    `  // modes`,
    `  reset: InkType;`,
    `  render: InkType;`,
    `  markup: InkType;`,
    ``,
    `  // call signature`,
    `  (text?: string | null, reset?: boolean): string;`,
    `}`,
  ].join("\n");

  const ansi = [
    `interface AnsiEffectMap { bold: string; dim: string; /* ... */ }`,
    `interface AnsiTrueColorMap { black: string; red: string; /* ... 16 names */ }`,
    ``,
    `interface AnsiFuncColorMap {`,
    `  rgb:  (r: number, g: number, b: number) => string;`,
    `  code: (c: number) => string;`,
    `}`,
    ``,
    `interface AnsiColorMap extends AnsiTrueColorMap, AnsiFuncColorMap {}`,
    ``,
    `interface AnsiMap {`,
    `  reset: string;`,
    `  ef: AnsiEffectMap;`,
    `  fg: AnsiColorMap;`,
    `  bg: AnsiColorMap;`,
    `}`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Types </Text>

    <Text as="p">
      Every type is exported from the package root. Import them with <Code src="import type" />.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Names </Text>
    <Text as="p"> The effects and the sixteen color names. </Text>
    <CodeBlock lang="js" :src="names" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Color values </Text>

    <Text as="p">
      A color is a name, an <Code src="rgb(...)" /> string, or a <Code src="code(...)" /> string.
    </Text>
    <CodeBlock lang="js" :src="colorValues" />

    <Text as="p">
      The <Code src="(string & {})" /> member keeps editor autocomplete for the known values while still accepting any
      string.
    </Text>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Style </Text>

    <Text as="p"> The central object. Every field is optional. </Text>
    <CodeBlock lang="js" :src="style" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> AST and blocks </Text>

    <Text as="p">
      <Code src="parseMarkup" /> returns <Code src="AstNode[]" />, and <Code src="parseAst" /> turns those into
      <Code src="StyledBlock[]" />.
    </Text>
    <CodeBlock lang="js" :src="ast" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> InkType </Text>

    <Text as="p">
      A condensed view of the chain type. Every member returns <Code src="InkType" /> again, and the type itself is
      callable.
    </Text>
    <CodeBlock lang="js" :src="ink" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> ANSI maps </Text>

    <Text as="p">
      These describe the internal escape-code tables. They are exported for completeness, and you will rarely need
      them.
    </Text>
    <CodeBlock lang="js" :src="ansi" />
  </section>
</template>
