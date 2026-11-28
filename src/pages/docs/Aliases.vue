<script setup>
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const aliases = [
    { name: "error", expands: "fg:brightRed bold" },
    { name: "warning", expands: "fg:yellow bold" },
    { name: "info", expands: "fg:brightCyan" },
    { name: "success", expands: "fg:brightGreen" },
  ];

  const usage = [
    `console.log(Dye.render('<!error>Build failed<!>'));`,
    `console.log(Dye.render('<!warning>Deprecated API<!>'));`,
    `console.log(Dye.render('<!info>Listening on :3000<!>'));`,
    `console.log(Dye.render('<!success>Done<!>'));`,
  ].join("\n");

  const notAlias = [
    `// error is an alias, but error + bold is not:`,
    `Dye.render('<!error bold>Hi<!>');            // error is ignored`,
    ``,
    `// write the full attributes instead:`,
    `Dye.render('<!fg:brightRed bold underline>Hi<!>');`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Aliases </Text>

    <Text as="p">
      An alias is a short tag name that expands to a set of attributes. Dye has four built in, plus the empty tag
      <Code src="<!>" />, which is an alias for <Code src="reset" />.
    </Text>

    <ul>
      <li v-for="alias in aliases" :key="alias.name">
        <Code :src="`<!${alias.name}>`" /> expands to <Code :src="alias.expands" />
      </li>
    </ul>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Usage </Text>
    <CodeBlock lang="js" :src="usage" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Rules </Text>

    <ul>
      <li> The alias must be the <strong>entire tag</strong>. </li>
      <li> Aliases are case-sensitive. </li>
      <li> Aliases are expanded by <Code src="Dye.parseMarkup()" />, and so by <Code src="Dye.render()" />. </li>
      <li> <Code src="Dye.createStyle()" /> does not expand aliases. </li>
      <li> The alias table is built in. Custom aliases are not supported in v1.1.3. </li>
    </ul>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Aliases do not combine </Text>
    <Text as="p">
      <Code src="<!error bold>" /> is not an alias. Dye reads <Code src="error" /> as an unknown attribute and
      ignores it, so only <Code src="bold" /> is applied.
    </Text>
    <CodeBlock :header="false" lang="js" :src="notAlias" />
  </section>
</template>
