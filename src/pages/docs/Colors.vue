<script setup>
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const standard = [
    { name: "black", fg: 30, bg: 40 },
    { name: "red", fg: 31, bg: 41 },
    { name: "green", fg: 32, bg: 42 },
    { name: "yellow", fg: 33, bg: 43 },
    { name: "blue", fg: 34, bg: 44 },
    { name: "magenta", fg: 35, bg: 45 },
    { name: "cyan", fg: 36, bg: 46 },
    { name: "white", fg: 37, bg: 47 },
  ];

  const bright = [
    { name: "brightBlack", fg: 90, bg: 100 },
    { name: "brightRed", fg: 91, bg: 101 },
    { name: "brightGreen", fg: 92, bg: 102 },
    { name: "brightYellow", fg: 93, bg: 103 },
    { name: "brightBlue", fg: 94, bg: 104 },
    { name: "brightMagenta", fg: 95, bg: 105 },
    { name: "brightCyan", fg: 96, bg: 106 },
    { name: "brightWhite", fg: 97, bg: 107 },
  ];

  const effects = [
    { name: "bold", code: 1 },
    { name: "dim", code: 2 },
    { name: "italic", code: 3 },
    { name: "underline", code: 4 },
    { name: "blink", code: 5 },
    { name: "inverse", code: 7 },
    { name: "hidden", code: 8 },
    { name: "strikethrough", code: 9 },
  ];

  const named = [
    `Dye.render('<!fg:red bg:brightWhite>named<!>');`,
  ].join("\n");

  const rgb = [
    `Dye.render('<!fg:rgb(255 100 0)>orange<!>');`,
    `Dye.render('<!bg:rgb(30 30 46)>dark<!>');`,
  ].join("\n");

  const code = [
    `Dye.render('<!fg:code(208)>palette orange<!>');`,
  ].join("\n");

  const invalid = [
    `Dye.render('<!fg:pink>Hi<!>');          // 'Hi\\x1b[0m'  (pink is not a color)`,
    `Dye.render('<!fg:rgb(300 0 0)>Hi<!>');  // 'Hi\\x1b[0m'  (300 is out of range)`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Colors </Text>

    <Text as="p">
      Colors work for both <Code src="fg" /> (text) and <Code src="bg" /> (background). Pick a name, an RGB value, or
      a palette code.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Named colors </Text>
    <Text as="p"> Sixteen names are available. The numbers are the ANSI codes Dye emits. </Text>

    <Text as="p"> <strong>Standard</strong> </Text>
    <ul>
      <li v-for="c in standard" :key="c.name">
        <Code :src="c.name" />: fg {{ c.fg }}, bg {{ c.bg }}
      </li>
    </ul>

    <Text as="p"> <strong>Bright</strong> </Text>
    <ul>
      <li v-for="c in bright" :key="c.name">
        <Code :src="c.name" />: fg {{ c.fg }}, bg {{ c.bg }}
      </li>
    </ul>

    <CodeBlock lang="js" :src="named" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> RGB and palette codes </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> RGB (true color) </Text>
    <CodeBlock lang="js" src="rgb(r g b)" />
    <ul>
      <li> Three integers from 0 to 255, separated by <strong>spaces</strong>. </li>
      <li> Emits <Code src="38;2;r;g;b" /> for the foreground and <Code src="48;2;r;g;b" /> for the background. </li>
    </ul>
    <CodeBlock lang="js" :src="rgb" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> 256-color codes </Text>
    <CodeBlock lang="js" src="code(n)" />
    <ul>
      <li> One integer from 0 to 255. </li>
      <li> Emits <Code src="38;5;n" /> for the foreground and <Code src="48;5;n" /> for the background. </li>
    </ul>
    <CodeBlock lang="js" :src="code" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Invalid colors </Text>

    <Text as="p">
      A color that fails validation (an unknown name, a number above 255, the wrong format) is
      <strong>ignored</strong>. The previous color, if there was one, stays in effect.
    </Text>

    <CodeBlock lang="js" :src="invalid" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Effects </Text>

    <Text as="p"> Each effect is a bare name in markup, and a boolean in a style object. </Text>

    <ul>
      <li v-for="e in effects" :key="e.name">
        <Code :src="e.name" />: code {{ e.code }}
      </li>
      <li> reset: code 0 </li>
    </ul>

    <Text as="p">
      Terminal support varies. <Code src="blink" />, <Code src="hidden" />, <Code src="italic" /> and true color are not
      honored everywhere.
    </Text>
  </section>
</template>
