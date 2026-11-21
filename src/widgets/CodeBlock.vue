<script setup>
  import { CopyIcon } from "@lucide/vue";
  import Button from "@/widgets/Button.vue";
  import { useHighlight } from "@/composables/useHighlight";

  const props = defineProps({
    code: String,
    lang: { type: String, default: "Plain Text" },
    title: { type: String, default: undefined },
    inline: { type: Boolean, default: false },
    header: { type: Boolean, default: true },
  })

  const lines = useHighlight(() => props.code, () => props.lang);
  const copy = () => navigator.clipboard.writeText(props.code);
</script>

<template>
  <div v-if="props.inline" class="code-inline">
    <code>
        <div
        v-for="(line, i) in lines"
        :key="i"
        class="line">
        <span
          v-for="(token, j) in line"
          :key="j"
          :class="token.className && `tok-${token.className}`">
          {{ token.value }}
        </span>
      </div>
    </code>
    <Button size="small" @click="copy">
      <CopyIcon size="18px" />
    </Button>
  </div>
  <div v-else class="code-block">
    <div v-if="props.header" class="header">
      <div class="lang"> {{ props.lang }} </div>
      <div v-if="props.title" class="title">{{ props.title }}</div>
      <div class="buttons">
        <Button variant="ghost" size="small" @click="copy">
          <CopyIcon size="14px" />
        </Button>
      </div>
    </div>

    <div class="body">
      <div class="number" aria-hidden="true">
        <span v-for="(line, i) in lines" :key="i">{{ i + 1 }}</span>
      </div>
      <code>
        <div
        v-for="(line, i) in lines"
        :key="i"
        class="line">
        <span
          v-for="(token, j) in line"
          :key="j"
          :class="token.className && `tok-${token.className}`">
          {{ token.value }}
        </span>
      </div>
    </code>

    </div>
  </div>

</template>

<style scoped>
  code {
    font-family: var(--mono-font);
    font-weight: 300;
    overflow: auto;
    font-size: 13px;
    padding: 8px;
    white-space: pre;
    display: grid;
    grid-template-columns: auto;

    * {
      user-select: text;
    }
  }

  .code-inline {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--surface-low);
    box-shadow: inset 0 -4px 0 var(--outline-low);
    padding: 16px;
    border-radius: 8px;

    button {
      opacity: 0;
      position: absolute;
      top: 4px;
      right: 4px;
    }



    &:hover {
      button {
        opacity: 1;
      }
    }
  }

  .code-block {
    background: var(--surface-high);
    color: var(--on-surface);
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 0 var(--outline-low);
    font-family: monospace;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .lang {
        padding-inline: 12px;
        font-size: 12px;
        font-weight: 600;
        color: var(--primary);
      }

      .title {
        flex-grow: 1;
        display: flex;
        justify-content: start;
        align-content: center;
      }

      .buttons {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 4px;
        padding: 6px 4px 4px 4px;
      }
    }

    .body {
      display: grid;
      grid-template-columns: auto 1fr;
      border-radius: 0 0 8px 6px;
      overflow: hidden;

      .number {
        font-family: var(--mono-font);
        font-weight: 100;
        font-size: 12px;
        background: var(--surface-lowest);
        color: var(--on-surface);
        display: grid;
        grid-template-rows: auto;
        padding: 8px;
        text-align: center;
        border-right: 2px solid var(--surface-low);

        &>* {
          display: grid;
          place-items: center;
          color: var(--outline);
        }
      }

      code {
        background: var(--surface-lowest);
        color: var(--on-surface);

        .line {
          width: 100%;
          height: 20px;
          line-height: 20px;
          padding-right: 24px;
        }
      }

    }
  }
</style>