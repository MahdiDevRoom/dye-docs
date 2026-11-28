<script setup>
  import Dye from "dye";
  import { BugIcon, CodeIcon } from "@lucide/vue";
  import Card from "@/components/Card.vue";
  import Code from "@/components/Code.vue";
  import Text from "@/components/Text.vue";
  import Wave from "@/components/Wave.vue";

  const version = Dye.version;
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Project </Text>

    <Text as="p">
      Dye is written and maintained by <strong>MahdiDevRoom</strong>. It is young and small on purpose, and the
      current version is <Code :src="version" />.
    </Text>

    <Text as="h3" variant="title" shape shape-variant="secondary"> Source and issues </Text>

    <Card href="https://github.com/MahdiDevRoom/dye" :icon="CodeIcon" title="Source on GitHub" target="_blank"
      rel="noopener noreferrer">
      Browse the code and follow development.
    </Card>
    
    <br>

    <Card href="https://github.com/MahdiDevRoom/dye/issues" :icon="BugIcon" title="Report an issue" target="_blank"
      rel="noopener noreferrer">
      Found a bug or have an idea? Open an issue on GitHub.
    </Card>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> License </Text>

    <ul>
      <li> <strong>Dye</strong> is released under the MIT License. </li>
      <li> This <strong>documentation site</strong> is released under the GPLv3. </li>
    </ul>
  </section>

  <Wave />

  <section>
    <Text as="h2" variant="headline" shape> Credits </Text>

    <ul>
      <li> Icons come from Lucide, under the ISC License (some icons are MIT, inherited from Feather). </li>
      <li> Code samples are highlighted with TanStack Highlight. </li>
    </ul>
  </section>
</template>
