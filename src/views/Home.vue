<script setup>
  import Article from "@/components/Article.vue";
  import Hero from "@/components/Hero.vue";
  import Section from "@/components/Section.vue";
  import Anchor from "@/widgets/Anchor.vue";
  import Button from "@/widgets/Button.vue";
  import Code from "@/widgets/Code.vue";
  import CodeBlock from "@/widgets/CodeBlock.vue";
  import Text from "@/widgets/Text.vue";
  import Wave from "@/widgets/Wave.vue";
  import { BellOffIcon, ShieldCheckIcon, SwatchBookIcon, TagsIcon, ToolCaseIcon, TypeIcon } from "@lucide/vue";
</script>

<template>
  <Article>
    <Hero />

    <Section>
      <Text as="p"> Hero code (two panels, "You write" / "You get"): </Text>
      <CodeBlock title="index.js" lang="js"
        :code="`import Dye from 'dye';\n\nDye.render('<!error>Something went wrong<!>');\n\n`" />
      <br>
      <CodeBlock title="output" lang="js" :code="`'\\x1b[91m\\x1b[1mSomething went wrong\\x1b[0m'`" />

      <Text as="h2" variant="headline"> Why markup? </Text>
      <Text as="p"> Raw ANSI is hard to read and easy to get wrong: </Text>
      <CodeBlock lang="js" :header="false" code="'\x1b[91m\x1b[1mError\x1b[0m'" />
      <Text as="p"> With Dye, the style sits right next to the text it styles: </Text>
      <CodeBlock lang="js" :header="false" code="Dye.render('<!error>Error<!>');" />
      <Text as="p"> Short paragraph under it: </Text>

      <Text as="p">
        Tags are inline, cumulative (each one adds to the last until <Code code="<!>" />
        resets), and aliasable: <Code code="<!error>" />, <Code code="<!warning>" />,
        <Code code="<!info>" /> and <Code code="<!success>" /> come built in.
      </Text>
    </Section>

    <Wave />

    <Section>
      <Text as="h2" variant="headline"> One engine, several ways to use it </Text>
      <Text as="p"> Four cards. Each one has a title, one sentence, and a code block. </Text>

      <Text as="h3" variant="headline-small"> Markup </Text>
      <Text as="p"> Put the style in the string. </Text>
      <CodeBlock lang="js" code="Dye.render('<!fg:rgb(255 128 0) bold>Orange<!>');" />

      <Text as="h3" variant="headline-small"> Ink </Text>
      <Text as="p"> Chain the style, then call it with your text. </Text>
      <CodeBlock lang="js" :code="`import { Ink } from 'dye';\n\nInk.rgb(255, 128, 0).bold('Orange');\n\n`" />

      <Text as="h3" variant="headline-small"> Style object </Text>
      <Text as="p"> Keep styles as data and reuse them. </Text>
      <CodeBlock lang="js" :code="`Dye.render('Orange', {\n  fg: 'rgb(255 128 0)',\n  bold: true,\n});`" />

      <Text as="h3" variant="headline-small"> Low level </Text>
      <Text as="p"> Parse markup into plain data and render it anywhere, such as HTML or tests. </Text>
      <br>
      <CodeBlock lang="js"
        :code="`Dye.parseAst(Dye.parseMarkup('<!fg:red>Hi<!>'));\n\n// [\n//   { text: 'Hi', style: { fg: 'red' } },\n//   { text: '', style: { reset: true } },\n// ]\n`" />
      <br>

      <Text as="p"> Compare them in the docs <Anchor to="/docs/overview"> Overview page </Anchor>. </Text>
    </Section>

    <Wave />

    <Section>
      <Text as="h3" variant="headline"> Features </Text>

      <ul>
        <li>
          <Text as="h4" variant="title">
            <SwatchBookIcon /> Colors your way:
          </Text>
          <Text as="p"> 16 named colors, 24-bit rgb(r g b), and 256-color code(n), for both foreground and background.
          </Text>
        </li>
        <li>
          <Text as="h4" variant="title">
            <TypeIcon /> Eight effects:
          </Text>
          <Text as="p"> bold, dim, italic, underline, blink, inverse, hidden, strikethrough. </Text>
        </li>
        <li>
          <Text as="h4" variant="title">
            <TagsIcon /> Built-in aliases:
          </Text>
          <Text as="p"> error, warning, info, success. </Text>
        </li>
        <li>
          <Text as="h4" variant="title">
            <ShieldCheckIcon /> Typed:
          </Text>
          <Text as="p"> written in TypeScript, with Style, ColorName, StyledBlock and more exported. </Text>
        </li>
        <li>
          <Text as="h4" variant="title">
            <ToolCaseIcon /> Handy utilities:
          </Text>
          <Text as="p"> strip markup with innerText, measure visible text with textLength, convert between tags and
            style objects with createTag and createStyle. </Text>
        </li>
        <li>
          <Text as="h4" variant="title">
            <BellOffIcon /> Quiet by design:
          </Text>
          <Text as="p"> invalid colors and unknown attributes are ignored instead of throwing, in the spirit of chalk
            and picocolors. </Text>
        </li>
      </ul>
    </Section>

    <Wave />

    <Section>
      <Text as="h4" variant="headline"> Closing call to action </Text>
      <Text as="p"> Ready to try it? </Text>

      <Anchor :no-style="true" to="/docs">
        <Button> Read the docs </Button>
      </Anchor>
      -
      <Anchor :no-style="true" href="https://github.com/MahdiDevRoom/dye">
        <Button> Browse the source </Button>
      </Anchor>
    </Section>
  </Article>
</template>