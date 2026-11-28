<script setup>
  import Dye from "dye";
  import {
    BookOpenTextIcon, DownloadIcon, PackageIcon, RocketIcon,
    CodeIcon, TagsIcon, PaletteIcon,
    PlayIcon, LinkIcon, LayersIcon, WrenchIcon, BracesIcon,
    TriangleAlertIcon, LightbulbIcon,
  } from "@lucide/vue";
  import Card from "@/components/Card.vue";
  import Code from "@/components/Code.vue";
  import Text from "@/components/Text.vue";

  const version = Dye.version;

  const groups = [
    {
      title: "Start here",
      ordered: true,
      items: [
        { to: "/docs/overview", title: "Overview", icon: BookOpenTextIcon, text: "What Dye is, the three ways to use it, and how it works." },
        { to: "/docs/installation", title: "Installation", icon: DownloadIcon, text: "Add Dye to your project with one command." },
        { to: "/docs/imports", title: "Imports", icon: PackageIcon, text: "What to import, including the TypeScript types." },
        { to: "/docs/quick-start", title: "Quick Start", icon: RocketIcon, text: "Print your first styled output in a minute." },
      ],
    },
    {
      title: "Learn the syntax",
      items: [
        { to: "/docs/markup", title: "Markup", icon: CodeIcon, text: "Tags, effects, and how styles accumulate." },
        { to: "/docs/aliases", title: "Aliases", icon: TagsIcon, text: "Short names like error, warning, info, and success." },
        { to: "/docs/colors", title: "Colors", icon: PaletteIcon, text: "Named colors, RGB, and 256-color codes." },
      ],
    },
    {
      title: "API reference",
      items: [
        { to: "/docs/render", title: "Render", icon: PlayIcon, text: "The all-in-one Dye.render()." },
        { to: "/docs/ink", title: "Ink", icon: LinkIcon, text: "Chainable styling." },
        { to: "/docs/low-level", title: "Low Level API", icon: LayersIcon, text: "Parse markup into data and render it anywhere." },
        { to: "/docs/utilities", title: "Utilities", icon: WrenchIcon, text: "Strip, measure, and convert styles." },
        { to: "/docs/types", title: "Types", icon: BracesIcon, text: "TypeScript definitions." },
      ],
    },
    {
      title: "Good to know",
      items: [
        { to: "/docs/behavior", title: "Behavior", icon: TriangleAlertIcon, text: "Edge cases and gotchas." },
        { to: "/docs/examples", title: "Examples", icon: LightbulbIcon, text: "Ready-to-use snippets." },
      ],
    },
  ];

  const links = [
    { href: "https://github.com/MahdiDevRoom/dye", title: "Source on GitHub", text: "Browse the code and follow development." },
    { href: "https://github.com/MahdiDevRoom/dye/issues", title: "Report an issue", text: "Found a bug or have an idea? Let us know." },
  ];
</script>

<template>
  <section>
    <Text as="h2" variant="headline" shape> Documentation </Text>

    <Text as="p">
      Everything you need to style terminal text with <strong>Dye</strong>. New here? Follow
      <em>Start here</em> in order, then use the menu to jump to any topic.
    </Text>

    <Text as="p"> These docs describe version <Code :src="version" />. </Text>

    <template v-for="group in groups" :key="group.title">
      <Text as="h3" variant="title" shape shape-variant="secondary"> {{ group.title }} </Text>

      <component :is="group.ordered ? 'ol' : 'ul'" class="cards">
        <li v-for="(item, i) in group.items" :key="item.to">
          <Card :to="item.to" :icon="item.icon" :title="group.ordered ? `${i + 1}. ${item.title}` : item.title">
            {{ item.text }}
          </Card>
        </li>
      </component>
    </template>

    <Text as="h3" variant="titlel" shape shape-variant="secondary"> Links </Text>

    <ul class="cards">
      <li v-for="link in links" :key="link.href">
        <Card :href="link.href" :title="link.title" target="_blank" rel="noopener noreferrer">
          {{ link.text }}
        </Card>
      </li>
    </ul>

    <Text as="p">
      Dye is released under the MIT License. This documentation site is licensed under GPLv3.
    </Text>
  </section>
</template>

<style scoped>
  .cards {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 12px;
  }

  .cards>li {
    display: grid;
  }
</style>