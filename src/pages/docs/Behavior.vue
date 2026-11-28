<script setup>
  import Code from "@/components/Code.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const accumulate = [
    `Dye.render('<!bold>A<!fg:red>B<!>C');`,
    `// A: bold   B: bold + red   C: plain`,
  ].join("\n");

  const closing = [
    `Dye.render('<!fg:red>Danger');      // '\\x1b[31mDanger'          no reset`,
    `Dye.render('<!fg:red>Danger<!>');   // '\\x1b[31mDanger\\x1b[0m'`,
    `Ink.red('Danger');                  // '\\x1b[31mDanger\\x1b[0m'  Ink resets for you`,
  ].join("\n");

  const unknown = [
    `Dye.render('<!sparkle>Hi<!>');   // 'Hi\\x1b[0m'  (the unknown tag is dropped)`,
  ].join("\n");

  const invalid = [
    `Dye.render('<!fg:pink>Hi<!>');   // 'Hi\\x1b[0m'`,
  ].join("\n");

  const malformed = [
    `Dye.render('<!:>Hi');        // '<!:>Hi'`,
    `Dye.render('<!fg:red Hi');   // '<!fg:red Hi'`,
  ].join("\n");

  const safe = [
    `const userInput = 'a <!fg:red> b';`,
    `Dye.render(userInput, { bold: true });   // tags in userInput are left alone`,
  ].join("\n");

  const alias = [
    `Dye.render('<!error bold>Hi<!>');            // not an alias: only bold applies`,
    `Dye.render('<!fg:brightRed bold>Hi<!>');     // write the full attributes instead`,
  ].join("\n");

  const reuse = [
    `const warn = Ink.yellow.bold;`,
    `warn('first');    // styled`,
    `warn('second');   // NOT styled: the first call used up the style`,
    ``,
    `// do this instead`,
    `const warn = (text) => Ink.yellow.bold(text);`,
  ].join("\n");

  const sticky = [
    `Ink.markup.red('Hi');   // '<!fg:red>Hi<!>'`,
    `Ink.red('Hi');          // still '<!fg:red>Hi<!>'`,
    `Ink.ansi.red('Hi');     // '\\x1b[31mHi\\x1b[0m'`,
  ].join("\n");

  const parsed = [
    `Ink.red('a <!bold>b<!>');   // b is bold`,
  ].join("\n");
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Styles and closing </Text>

    <Text as="p"> How Dye behaves in situations the other pages only touch on. This all describes v1.1.3. </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Styles accumulate </Text>
    <Text as="p">
      Each tag adds to the current style. The only way to remove something is a full reset with <Code src="<!>" />.
      There is no way to turn off a single effect or color.
    </Text>
    <CodeBlock lang="js" :src="accumulate" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Markup does not close itself </Text>
    <Text as="p">
      <Code src="render(markup)" /> does not add a reset at the end. If a tag is left open, the color continues in the
      terminal after your output. Close tags with <Code src="<!>" />.
    </Text>
    <CodeBlock lang="js" :src="closing" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Bad input </Text>

    <Text as="p"> Dye stays quiet when something is wrong. It never throws for a bad tag. </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Unknown attributes </Text>
    <Text as="p"> A tag made only of unknown attributes is removed from the output. </Text>
    <CodeBlock lang="js" :src="unknown" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Invalid colors </Text>
    <Text as="p"> The color is ignored and stays whatever it was before the tag. </Text>
    <CodeBlock lang="js" :src="invalid" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Malformed tags </Text>
    <Text as="p">
      A tag with no word characters is not treated as a tag, and a tag with no closing <Code src=">" /> is plain text.
      Both are printed as they are.
    </Text>
    <CodeBlock lang="js" :src="malformed" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Literal text and aliases </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> There is no escape for the tag start </Text>
    <Text as="p">
      Anything that looks like <Code src="<!...>" /> is read as a tag. That includes text such as
      <Code src="<!DOCTYPE html>" />, which would be swallowed as an unknown tag. To print arbitrary text safely, use
      the form that does not parse markup.
    </Text>
    <CodeBlock lang="js" :src="safe" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Aliases stand alone </Text>
    <Text as="p">
      <Code src="<!error>" /> expands, but <Code src="<!error bold>" /> does not, because <Code src="error" /> is then
      an unknown attribute.
    </Text>
    <CodeBlock lang="js" :src="alias" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Ink keeps shared state </Text>

    <Text as="p">
      Ink stores its pending style in one object shared by every chain. That has three consequences.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> A chain is used up by the call </Text>
    <Text as="p">
      Do not store a chain and reuse it. Wrap it in a function instead. Also, never build a chain without calling it,
      because the pending style would leak into the next Ink call.
    </Text>
    <CodeBlock lang="js" :src="reuse" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Markup mode is sticky </Text>
    <Text as="p"> After <Code src="Ink.markup" />, call <Code src="Ink.ansi" /> to go back to ANSI output. </Text>
    <CodeBlock lang="js" :src="sticky" />

    <Text as="h3" variant="title" shape shape-variant="secondary"> Your text is parsed as markup </Text>
    <Text as="p">
      Ink builds a markup string from your text and renders it, so a tag inside your text is interpreted.
    </Text>
    <CodeBlock lang="js" :src="parsed" />
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Measuring text </Text>

    <Text as="p">
      <Code src="Dye.textLength()" /> counts the UTF-16 units of the visible text. Emoji, combining characters, and
      full-width characters can take a different number of terminal columns than that count suggests.
    </Text>
  </section>
</template>
