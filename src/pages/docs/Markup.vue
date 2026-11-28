<script setup>
  import Anchor from "@/components/Anchor.vue";
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const combo = [
    `Dye.render('<!fg:white bg:red bold>FAILED<!>');`,
  ].join("\n");

  const effects = [
    `Dye.render('<!bold underline>Important<!>');`,
  ].join("\n");

  const colors = [
    `Dye.render('<!fg:brightCyan>named<!>');`,
    `Dye.render('<!fg:rgb(255 100 0)>true color<!>');`,
    `Dye.render('<!bg:code(208)>256 palette<!>');`,
  ].join("\n");

  const accumulate = [
    `Dye.render('<!bold>A<!fg:red>B<!>C');`,
    `// A is bold`,
    `// B is bold + red`,
    `// C is plain`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Markup </Text>

    <Text as="p">
      Markup is plain text with <strong>tags</strong> in it. A tag changes the style of all the text after it, until
      a reset.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Tag syntax </Text>
    <CodeBlock :header="false" lang="js" src="<!attribute attribute ...>" />
    <ul>
      <li> A tag starts with <Code src="<!" /> and ends with <Code src=">" />. </li>
      <li> Attributes are separated by spaces. </li>
      <li> Extra whitespace inside the tag is ignored: <Code src="<! fg:red >" /> works. </li>
    </ul>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Attributes </Text>
    <ul>
      <li> <Code src="fg:color" />: foreground color, like <Code src="<!fg:red>" /> </li>
      <li> <Code src="bg:color" />: background color, like <Code src="<!bg:blue>" /> </li>
      <li> An effect name on its own, like <Code src="<!bold>" /> </li>
      <li> A reset: <Code src="<!>" /> or <Code src="<!reset>" /> </li>
      <li> An alias on its own, like <Code src="<!error>" /> </li>
    </ul>

    <Text as="p"> Combine as many attributes as you like in one tag: </Text>
    <CodeBlock :header="false" lang="js" :src="combo" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Effects </Text>
    <Text as="p">
      Effects are written as bare names, with no value:
      <Code src="bold" />, <Code src="dim" />, <Code src="italic" />, <Code src="underline" />,
      <Code src="blink" />, <Code src="inverse" />, <Code src="hidden" />, <Code src="strikethrough" />.
    </Text>
    <CodeBlock :header="false" lang="js" :src="effects" />
    <Text as="p">
      Write <Code src="<!bold>" />, not <Code src="<!bold:true>" />. A value after an effect name is ignored.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Colors in tags </Text>
    <Text as="p">
      A color can be a name, <Code src="rgb(...)" />, or <Code src="code(...)" />. The details are on the
      <Anchor to="/docs/colors"> Colors </Anchor> page.
    </Text>
    <CodeBlock lang="js" :src="colors" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Syntax rules </Text>

    <ul>
      <li> Names are case-sensitive: <Code src="brightRed" /> works, <Code src="brightred" /> does not. </li>
      <li> Do not put spaces around the colon: use <Code src="fg:red" />, not <Code src="fg: red" />. </li>
      <li> Inside <Code src="rgb(...)" />, values are separated by spaces, not commas. </li>
      <li> Styles accumulate until you reset them. </li>
    </ul>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Styles accumulate </Text>
    <Text as="p"> Each tag adds to the current style instead of replacing it. </Text>
    <CodeBlock :header="false" lang="js" :src="accumulate" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Resetting </Text>
    <Text as="p">
      <Code src="<!>" /> clears everything at once. There is no way to turn off a single effect or color, so reset
      and set what you need.
    </Text>
  </section>
</template>
