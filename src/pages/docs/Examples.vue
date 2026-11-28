<script setup>
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const logHelpers = [
    `import Dye from 'dye';`,
    ``,
    `const log = {`,
    `  success: (msg) => console.log(Dye.render('<!success>✔<!> ' + msg)),`,
    `  info:    (msg) => console.log(Dye.render('<!info>ℹ<!> ' + msg)),`,
    `  warn:    (msg) => console.log(Dye.render('<!warning>⚠<!> ' + msg)),`,
    `  error:   (msg) => console.log(Dye.render('<!error>✖<!> ' + msg)),`,
    `};`,
    ``,
    `log.success('Build finished');`,
    `log.error('Could not connect');`,
  ].join("\n");

  const safeLog = [
    `const log = (icon, style, msg) =>`,
    `  console.log(Dye.render(icon, style) + ' ' + msg);`,
    ``,
    `log('✖', { fg: 'brightRed', bold: true }, userInput);`,
  ].join("\n");

  const columns = [
    `import Dye from 'dye';`,
    ``,
    `const pad = (markup, width) =>`,
    `  markup + ' '.repeat(Math.max(0, width - Dye.textLength(markup)));`,
    ``,
    `const rows = [`,
    `  ['<!fg:green>ok<!>',      'server'],`,
    `  ['<!fg:red bold>fail<!>', 'database'],`,
    `];`,
    ``,
    `for (const [status, name] of rows) {`,
    `  console.log(Dye.render(pad(status, 8) + name));`,
    `}`,
  ].join("\n");

  const ramp = [
    `import { Ink } from 'dye';`,
    ``,
    `let line = '';`,
    `for (let i = 0; i < 16; i++) {`,
    `  line += Ink.bgRgb(i * 16, 80, 255 - i * 16)('  ');`,
    `}`,
    `console.log(line);`,
  ].join("\n");

  const styles = [
    `import Dye from 'dye';`,
    ``,
    `const styles = {`,
    `  title: { fg: 'brightCyan', bold: true, underline: true },`,
    `  muted: { fg: 'brightBlack', italic: true },`,
    `};`,
    ``,
    `console.log(Dye.render('Dye', styles.title));`,
    `console.log(Dye.render('v1.1.3', styles.muted));`,
  ].join("\n");

  const strip = [
    `import Dye from 'dye';`,
    ``,
    `const message = '<!error>Failed<!> to load <!bold>config.json<!>';`,
    `console.log(Dye.innerText(message));   // 'Failed to load config.json'`,
  ].join("\n");

  const roundTrip = [
    `import Dye from 'dye';`,
    ``,
    `const tag = Dye.createTag({ fg: 'rgb(255 100 0)', bold: true });`,
    `// '<!fg:rgb(255 100 0) bold>'`,
    ``,
    `const style = Dye.createStyle(tag);`,
    `// { fg: 'rgb(255 100 0)', bold: true }`,
  ].join("\n");

  const html = [
    `import Dye from 'dye';`,
    ``,
    `const NAMED = {`,
    `  red: '#d33', green: '#2a2', yellow: '#cb2',`,
    `  blue: '#36d', magenta: '#a3a', cyan: '#2aa', white: '#eee', black: '#222',`,
    `};`,
    ``,
    `const cssColor = (value) => {`,
    `  if (value.startsWith('rgb(')) return value.split(' ').join(', ');`,
    `  return NAMED[value] ?? null;   // bright colors and code(n) are skipped here`,
    `};`,
    ``,
    `const escapeHtml = (s) =>`,
    `  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');`,
    ``,
    `function toHtml(markup) {`,
    `  const blocks = Dye.parseAst(Dye.parseMarkup(markup));`,
    ``,
    `  return blocks`,
    `    .filter((b) => b.text)`,
    `    .map(({ text, style = {} }) => {`,
    `      const css = [];`,
    `      const color = style.fg && cssColor(style.fg);`,
    `      if (color) css.push('color:' + color);`,
    `      if (style.bold) css.push('font-weight:700');`,
    `      if (style.italic) css.push('font-style:italic');`,
    `      if (style.underline) css.push('text-decoration:underline');`,
    `      return '<span style="' + css.join(';') + '">' + escapeHtml(text) + '</span>';`,
    `    })`,
    `    .join('');`,
    `}`,
    ``,
    `toHtml('<!fg:red bold>Error<!> plain');`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Log helpers </Text>

    <Text as="p"> Four helpers that print an icon in a color, then your message. </Text>
    <CodeBlock lang="js" :src="logHelpers" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> With user input </Text>
    <Text as="p">
      If the message can contain user input, render the icon on its own so the message is never parsed as markup.
    </Text>
    <CodeBlock :header="false" lang="js" :src="safeLog" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Aligned columns </Text>

    <Text as="p">
      <Code src="textLength" /> ignores the tags, so padding stays correct even when the text is styled.
    </Text>
    <CodeBlock lang="js" :src="columns" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> A color ramp </Text>

    <Text as="p"> Sixteen background blocks, each a step along an RGB gradient. </Text>
    <CodeBlock lang="js" :src="ramp" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Reusable styles </Text>

    <Text as="p">
      An <Code src="Ink" /> chain cannot be stored, so keep the style as data and use
      <Code src="render(text, style)" />.
    </Text>
    <CodeBlock lang="js" :src="styles" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Strip styling </Text>

    <Text as="p"> Get the plain text out of a styled message. </Text>
    <CodeBlock lang="js" :src="strip" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Save and rebuild a style </Text>
    <Text as="p"> Turn a style into a tag you can store, then back into a style. </Text>
    <CodeBlock lang="js" :src="roundTrip" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Render markup as HTML </Text>

    <Text as="p">
      The low-level API returns plain data, so you can target something other than a terminal. This turns styled blocks
      into <Code src="span" /> elements.
    </Text>
    <CodeBlock lang="js" :src="html" />
  </section>
</template>
