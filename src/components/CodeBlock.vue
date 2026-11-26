<script setup>
  import { computed, ref } from "vue";
  import { CopyIcon, XIcon, CheckIcon } from "@lucide/vue";
  import { useHighlight } from "@/composables/useHighlight";
  import Button from "@/components/Button.vue";

  const props = defineProps({
    src: String,
    lang: String,
    title: { type: String, default: undefined },
    inline: { type: Boolean, default: false },
    header: { type: Boolean, default: true },
    numberbar: { type: Boolean, default: true },
  })

  const lines = useHighlight(() => props.src, () => props.lang);

  const status = ref("idle");
  let timer;

  const icon = computed(() => ({
    idle: CopyIcon,
    copied: CheckIcon,
    failed: XIcon,
  })[status.value]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(props.src ?? "");
      status.value = "copied";
    } catch {
      status.value = "failed";
    }
    clearTimeout(timer);
    timer = setTimeout(() => (status.value = "idle"), 2000);
  };
</script>

<template>
  <div class="code-block" :class="{ inline: props.inline }">
    <div class="header" v-if="props.header && !props.inline">
      <div class="lang"> {{ props.lang }} </div>
      <div class="title" v-if="title"> {{ props.title }} </div>
      <div class="buttons">
        <Button @click="copy" size="small" variant="ghost">
          <component :is="icon" size="14px" />
        </Button>
      </div>
    </div>
    <div class="body">
      <div class="number" v-if="props.numberbar && !props.inline">
        <span v-for="(line, i) in lines" :key="i">{{ i + 1 }}</span>
      </div>
      <code>
        <span
          v-for="(line, i) in lines"
          :key="i"
          class="line">
          <span
            v-for="(token, j) in line"
            :key="j"
            :class="token.className && `tok-${token.className}`">
            {{ token.value }}
          </span>
        </span>
      </code>
      <div class="float" v-if="props.inline">
        <Button @click="copy" size="small" variant="ghost">
          <component :is="icon" size="14px" />
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .code-block {
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: 8px;
    background: var(--surface-high);
    color: var(--on-surface);
    box-shadow: 0 4px 0 var(--outline-low);
    font-family: var(--mono-font);
    font-size: var(--tg-size-body-small);
    font-weight: 300;
    overflow: hidden;
    position: relative;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
      gap: 8px;
      padding: 2px;

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
        font-size: var(--tg-size-label-small);
        font-weight: var(--tg-weight-body);
        background: var(--surface);
        color: var(--on-surface);
        border-radius: 4px;
        padding: 4px 16px;
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
      overflow: hidden auto;
      max-height: 300px;
      background: var(--surface-lowest);
      color: var(--on-surface);
      line-height: 1.5;

      .number {
        display: grid;
        grid-template-rows: auto;
        padding: 8px;
        text-align: center;
        border-right: 2px solid var(--surface-low);
        user-select: none;

        &>* {
          display: grid;
          place-items: center;
          color: var(--outline);
          min-height: 1lh;
        }
      }

      code {
        overflow: auto;
        font-size: 13px;
        padding: 8px 0;
        white-space: pre;
        display: grid;
        grid-template-columns: 1fr;

        .line {
          width: 100%;
          padding-left: 8px;
          padding-right: 24px;
          min-height: 1lh;
        }
      }
    }

    .float {
      display: grid;
      place-items: center;
      padding: 8px;
      background: var(--surface-low);
    }

    &.inline {
      .body {
        gap: 4px;
        grid-template-columns: 1fr auto;
      }

      code {
        padding: 16px;
      }
    }
  }
</style>