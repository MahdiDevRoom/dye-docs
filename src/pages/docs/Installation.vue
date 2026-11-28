<script setup>
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const version = [
    `import Dye from 'dye';`,
    ``,
    `console.log(Dye.version);`,
  ].join("\n");

  const commonjs = [
    `import('dye').then(({ default: Dye }) => {`,
    `  console.log(Dye.render('<!fg:green>Hello<!>'));`,
    `});`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Installation </Text>

    <Text as="p">
      Dye is installed straight from GitHub. Pick the package manager you already use.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> npm </Text>
    <CodeBlock inline lang="shell" src="npm install github:mahdidevroom/dye" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> pnpm </Text>
    <CodeBlock inline lang="shell" src="pnpm add github:mahdidevroom/dye" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Yarn </Text>
    <CodeBlock inline lang="shell" src="yarn add github:mahdidevroom/dye" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Check the install </Text>
    <Text as="p">
      Dye exposes its version as a static property, so you can confirm what you got.
    </Text>
    <CodeBlock inline lang="js" :src="version" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Module format </Text>

    <Text as="p">
      Dye is an <strong>ES module</strong> (<Code src='"type": "module"' />). Its entry point is
      <Code src="dist/index.js" /> and its types live in <Code src="dist/index.d.ts" />, so TypeScript picks them up
      without any extra setup.
    </Text>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Troubleshooting </Text>

    <Text as="p">
      Newer npm versions can refuse to install a package from a Git URL. If the command above fails, use the option
      that matches your npm major version.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> npm 12 </Text>
    <CodeBlock inline lang="shell" src="npm install github:mahdidevroom/dye --allow-git=all" />
    <Text as="p"> To allow Git installs once for every project: </Text>
    <CodeBlock inline lang="shell" src="npm config set allow-git=all" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> npm 11 </Text>
    <CodeBlock inline lang="shell" src="npm install github:mahdidevroom/dye --userconfig=/dev/null" />
  </section>
</template>
