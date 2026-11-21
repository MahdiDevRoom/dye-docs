<template>
  <h2 id="imports-title">2. Imports and exports</h2>
  <p>Use the default import for the <code>Dye</code> class. Import <code>Ink</code> and types by name.</p>
  <pre><code>import Dye from 'dye';
import { Ink } from 'dye';
import type { Style, ColorName, EffectName, StyledBlock } from 'dye';</code></pre>
  <table>
    <caption>Package exports</caption>
    <thead>
      <tr>
        <th>Export</th>
        <th>Kind</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>Dye</code></td>
        <td>Default value export</td>
        <td>Static API class; also exposes <code>Dye.Ink</code>.</td>
      </tr>
      <tr>
        <td><code>Ink</code></td>
        <td>Named value export</td>
        <td>Alias of <code>Dye.Ink</code>.</td>
      </tr>
      <tr>
        <td><code>EffectName</code>, <code>ColorName</code></td>
        <td>Named type exports</td>
        <td>Unions of supported effect and named-color names.</td>
      </tr>
      <tr>
        <td><code>Style</code>, <code>StyledBlock</code></td>
        <td>Named type exports</td>
        <td>Style object and styled text block shapes.</td>
      </tr>
      <tr>
        <td><code>AstNode</code>, <code>AstTagNode</code>, <code>AstTextNode</code></td>
        <td>Named type exports</td>
        <td>Markup parser AST node types.</td>
      </tr>
      <tr>
        <td><code>RgbValue</code>, <code>CodeValue</code>, <code>ColorValue</code></td>
        <td>Named type exports</td>
        <td>Color value types.</td>
      </tr>
      <tr>
        <td><code>AnsiEffectMap</code>, <code>AnsiTrueColorMap</code>, <code>AnsiFuncColorMap</code>,
          <code>AnsiColorMap</code>, <code>AnsiMap</code></td>
        <td>Named type exports</td>
        <td>ANSI mapping interfaces.</td>
      </tr>
      <tr>
        <td><code>InkType</code></td>
        <td>Named type export</td>
        <td>Type of the chainable Ink interface.</td>
      </tr>
    </tbody>
  </table>
</template>