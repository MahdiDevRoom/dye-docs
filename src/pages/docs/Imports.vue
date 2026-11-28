<script setup>
  import Anchor from "@/components/Anchor.vue";
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const types = [
    `import type {`,
    `  Style,`,
    `  StyledBlock,`,
    `  AstNode,`,
    `  ColorName,`,
    `  EffectName,`,
    `  InkType,`,
    `} from 'dye';`,
  ].join("\n");

  const typeNames = [
    "EffectName", "ColorName", "RgbValue", "CodeValue", "ColorValue",
    "Style", "AstTagNode", "AstTextNode", "AstNode", "StyledBlock", "InkType",
    "AnsiEffectMap", "AnsiTrueColorMap", "AnsiFuncColorMap", "AnsiColorMap", "AnsiMap",
  ];
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Imports </Text>

    <Text as="p">
      Dye has one default export and one named export. Everything else is a TypeScript type.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Default export </Text>
    <CodeBlock lang="js" src="import Dye from 'dye';" />
    <Text as="p"> The <Code src="Dye" /> class: markup rendering, the low-level API, and utilities. </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Named export </Text>
    <CodeBlock lang="js" src="import { Ink } from 'dye';" />
    <Text as="p">
      The chainable helper. It is the same object as <Code src="Dye.Ink" />, just a shortcut.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Both at once </Text>
    <CodeBlock lang="js" src="import Dye, { Ink } from 'dye';" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Types </Text>

    <Text as="p">
      All types are exported from the package root. Use <Code src="import type" /> so they disappear from the compiled
      output.
    </Text>

    <CodeBlock lang="js" :src="types" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Everything that is exported </Text>
    <ul>
      <li v-for="name in typeNames" :key="name"> <Code :src="name" /> </li>
    </ul>

    <Text as="p">
      Each one is described on the <Anchor to="/docs/types"> Types </Anchor> page.
    </Text>
  </section>
</template>
