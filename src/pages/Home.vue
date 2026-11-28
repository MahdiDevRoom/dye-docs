<script setup>
  import Anchor from "@/components/Anchor.vue";
  import Button from "@/components/Button.vue";
  import Card from "@/components/Card.vue";
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import GithubIcon from "@/components/GithubIcon.vue";
  import Hero from "@/components/Hero.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";
  import { BellOffIcon, BookAIcon, ShieldCheckIcon, SwatchBookIcon, TagsIcon, ToolCaseIcon, TypeIcon } from "@lucide/vue";

  const code = [
    `import Dye, { Ink } from "dye";`,
    ``,
    `// Markup API`,
    `console.log(Dye.render("Build with <!fg:brightCyan bold>Dye<!>"));`,
    ``,
    `// Chainable API`,
    `console.log(Ink.brightGreen.bold("Ready to go"));`,
  ].join("\n")
</script>

<template>
  <Hero />

  <section id="quick-start">
    <Text as="h2" variant="headline" shape>What is Dye?</Text>
    <Text as="p">
      A TypeScript library designed to make terminal text styling
      expressive and straightforward.
    </Text>

    <Text as="h2" variant="headline" shape>Quick Start</Text>
    <Text as="p"> Install Dye from its GitHub repository, then import the API you want to use. </Text>

    <CodeBlock lang="bash" title="Install" src="npm install github:MahdiDevRoom/dye" />

    <br>

    <CodeBlock lang="js" title="Use Dye" :src="code" />

    <Text as="p">
      Markup is useful when styles live inside a string. Ink is useful when you
      want to compose the style in code.
    </Text>

    <Text as="h2" variant="headline" shape> Why markup? </Text>
    <Text as="p"> Raw ANSI is hard to read and easy to get wrong: </Text>
    <CodeBlock lang="js" :header="false" src="'\x1b[91m\x1b[1mError\x1b[0m'" />
    <Text as="p"> With Dye, the style sits right next to the text it styles: </Text>
    <CodeBlock lang="js" :header="false" src="Dye.render('<!error>Error<!>');" />
    <Text as="p"> Short paragraph under it: </Text>

    <Text as="p">
      Tags are inline, cumulative (each one adds to the last until <Code src="<!>" />
      resets), and aliasable: <Code src="<!error>" />, <Code src="<!warning>" />,
      <Code src="<!info>" /> and <Code src="<!success>" /> come built in.
    </Text>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> One engine, several ways to use it </Text>
    <Text as="p"> Four cards. Each one has a title, one sentence, and a code block. </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Markup </Text>
    <Text as="p"> Put the style in the string. </Text>
    <CodeBlock lang="js" src="Dye.render('<!fg:rgb(255 128 0) bold>Orange<!>');" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Ink </Text>
    <Text as="p"> Chain the style, then call it with your text. </Text>
    <CodeBlock lang="js" :src="`import { Ink } from 'dye';\n\nInk.rgb(255, 128, 0).bold('Orange');\n\n`" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Style object </Text>
    <Text as="p"> Keep styles as data and reuse them. </Text>
    <CodeBlock lang="js" :src="`Dye.render('Orange', {\n  fg: 'rgb(255 128 0)',\n  bold: true,\n});`" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Low level </Text>
    <Text as="p"> Parse markup into plain data and render it anywhere, such as HTML or tests. </Text>
    <br>
    <CodeBlock lang="js"
      :src="`Dye.parseAst(Dye.parseMarkup('<!fg:red>Hi<!>'));\n\n// [\n//   { text: 'Hi', style: { fg: 'red' } },\n//   { text: '', style: { reset: true } },\n// ]\n`" />
    <br>

    <Text as="p"> Compare them in the docs <Anchor to="/docs/overview"> Overview page </Anchor>. </Text>
  </section>

  <Wave />

  <section>
    <Text as="h3" variant="headline" shape> Features </Text>

    <div class="grid">
      <Card title="Colors your way:" :icon="SwatchBookIcon">
        16 named colors, 24-bit rgb(r g b), and 256-color code(n), for both foreground and background.
      </Card>
      <Card title="Eight effects:" :icon="TypeIcon">
        bold, dim, italic, underline, blink, inverse, hidden, strikethrough.
      </Card>
      <Card title="Built-in aliases:" :icon="TagsIcon">
        error, warning, info, success.
      </Card>
      <Card title="Typed:" :icon="ShieldCheckIcon">
        written in TypeScript, with Style, ColorName, StyledBlock and more exported.
      </Card>
      <Card title="Handy utilities:" :icon="ToolCaseIcon">
        strip markup with innerText, measure visible text with textLength, convert between tags and
        style objects with createTag and createStyle.
      </Card>
      <Card title="Quiet by design:" :icon="BellOffIcon">
        invalid colors and unknown attributes are ignored instead of throwing, in the spirit of chalk
        and picocolors.
      </Card>
    </div>
  </section>

  <Wave />

  <section>
    <Text as="h4" variant="headline" shape> Closing call to action </Text>
    <Text as="p"> Ready to try it? </Text>

    <div class="flex">
      <Anchor no-style to="/docs">
        <Button> Read the docs
          <BookAIcon size="20px" />
        </Button>
      </Anchor>

      <Anchor no-style href="https://github.com/MahdiDevRoom/dye">
        <Button> Browse the source
          <GithubIcon size="20px" />
        </Button>
      </Anchor>
    </div>

  </section>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  .flex {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 16px;
  }
</style>