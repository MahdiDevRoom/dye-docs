<template>
  <h2 id="types-title">10. TypeScript types</h2>
  <p>The package includes its own declaration files. You do not need a separate <code>@types</code> package.</p>
  <pre><code>import Dye from 'dye';
import { Ink } from 'dye';
import type { Style, ColorName, EffectName, ColorValue } from 'dye';

const style: Style = { fg: 'red', bold: true };
const color: ColorName = 'brightCyan';
const effect: EffectName = 'underline';
const value: ColorValue = 'rgb(255 128 0)';

console.log(Dye.render('Typed output', style));
console.log(Ink.green('Typed Ink output'));</code></pre>
  <table>
    <caption>Exported type reference</caption>
    <thead>
      <tr>
        <th>Type</th>
        <th>Definition / purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>EffectName</code></td>
        <td>Union of <code>bold</code>, <code>dim</code>, <code>italic</code>, <code>underline</code>,
          <code>blink</code>, <code>inverse</code>, <code>hidden</code>, and <code>strikethrough</code>.</td>
      </tr>
      <tr>
        <td><code>ColorName</code></td>
        <td>Union of the 16 supported named colors.</td>
      </tr>
      <tr>
        <td><code>RgbValue</code></td>
        <td>Template literal type: <code>rgb(${number} ${number} ${number})</code>.</td>
      </tr>
      <tr>
        <td><code>CodeValue</code></td>
        <td>Template literal type: <code>code(${number})</code>.</td>
      </tr>
      <tr>
        <td><code>ColorValue</code></td>
        <td>Named color, RGB value, code value, or string.</td>
      </tr>
      <tr>
        <td><code>Style</code></td>
        <td>Optional <code>reset</code>, <code>fg</code>, <code>bg</code>, and effect properties.</td>
      </tr>
      <tr>
        <td><code>AstTagNode</code></td>
        <td>AST node with <code>type: 'tag'</code> and a <code>Style</code> value.</td>
      </tr>
      <tr>
        <td><code>AstTextNode</code></td>
        <td>AST node with <code>type: 'text'</code> and a string value.</td>
      </tr>
      <tr>
        <td><code>AstNode</code></td>
        <td>Union of <code>AstTagNode</code> and <code>AstTextNode</code>.</td>
      </tr>
      <tr>
        <td><code>StyledBlock</code></td>
        <td>Object with a <code>text: string</code> and optional <code>style</code>.</td>
      </tr>
      <tr>
        <td><code>InkType</code></td>
        <td>Chainable Ink properties, methods, and callable signature.</td>
      </tr>
      <tr>
        <td><code>AnsiEffectMap</code></td>
        <td>ANSI string mapping for supported effects.</td>
      </tr>
      <tr>
        <td><code>AnsiTrueColorMap</code></td>
        <td>ANSI string mapping for named colors.</td>
      </tr>
      <tr>
        <td><code>AnsiFuncColorMap</code></td>
        <td>Function mappings for RGB and 256-color codes.</td>
      </tr>
      <tr>
        <td><code>AnsiColorMap</code></td>
        <td>Combination of named and function color mappings.</td>
      </tr>
      <tr>
        <td><code>AnsiMap</code></td>
        <td>Top-level ANSI map for reset, effects, foreground, and background.</td>
      </tr>
    </tbody>
  </table>
</template>