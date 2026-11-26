import { computed, toValue } from "vue";
import { createHighlighter } from "@tanstack/highlight";
import { shell } from "@tanstack/highlight/languages/shell";
import { js } from "@tanstack/highlight/languages/js";

export const highlighter = createHighlighter({
  languages: [shell, js],
})

function splitLines(tokens) {
  const lines = [[]]
  for (const token of tokens) {
    token.value.split(/\r?\n/).forEach((part, i) => {
      if (i > 0) lines.push([]);
      if (part !== "") {
        lines[lines.length - 1].push({ className: token.className, value: part });
      }
    });
  }
  if (lines.length > 1 && lines[lines.length - 1].length === 0) lines.pop();
  return lines;
}

function highlightLines(code, lang) {
  const { tokens } = highlighter.tokenize(code, { lang });
  return splitLines(tokens);
}

export function useHighlight(code, lang) {
  return computed(() => highlightLines(toValue(code) ?? "", toValue(lang)));
}