<template>
  <h2 id="low-level-title">8. Low-level parsing API</h2>
  <p>Use the low-level methods when you need to inspect markup or build a custom renderer.</p>
  <h3>parseMarkup</h3>
  <p>Converts a markup string into an array of AST nodes. A tag node contains a parsed <code>Style</code>; a text node
    contains plain text.</p>
  <pre><code>const ast = Dye.parseMarkup('&lt;!fg:red&gt;Hello&lt;!&gt; World');

// Conceptual result:
[
  { type: 'tag', value: { fg: 'red' } },
  { type: 'text', value: 'Hello' },
  { type: 'tag', value: { reset: true } },
  { type: 'text', value: ' World' },
]</code></pre>
  <h3>parseAst</h3>
  <p>Converts AST nodes into styled text blocks while tracking the active style.</p>
  <pre><code>const blocks = Dye.parseAst(ast);

// Conceptual result:
[
  { text: 'Hello', style: { fg: 'red' } },
  { text: '', style: { reset: true } },
  { text: ' World', style: {} },
]</code></pre>
  <h3>parseStyle</h3>
  <p>Converts a style object or an array of styled blocks into ANSI escape sequences.</p>
  <pre><code>const ansi = Dye.parseStyle(blocks);
const redPrefix = Dye.parseStyle({ fg: 'red', bold: true });</code></pre>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Input</th>
        <th>Return value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>parseMarkup(markup)</code></td>
        <td>Markup string</td>
        <td><code>AstNode[]</code></td>
      </tr>
      <tr>
        <td><code>parseAst(ast)</code></td>
        <td><code>AstNode[]</code></td>
        <td><code>StyledBlock[]</code></td>
      </tr>
      <tr>
        <td><code>parseStyle(input)</code></td>
        <td><code>StyledBlock[]</code>, <code>Style</code>, or <code>undefined</code></td>
        <td>ANSI string</td>
      </tr>
      <tr>
        <td><code>createTag(style)</code></td>
        <td><code>Style</code></td>
        <td>Markup tag string</td>
      </tr>
      <tr>
        <td><code>createStyle(tag)</code></td>
        <td>Markup tag or tag content</td>
        <td><code>Style</code></td>
      </tr>
    </tbody>
  </table>
  <h3>createTag and createStyle</h3>
  <pre><code>const tag = Dye.createTag({ fg: 'red', bold: true });
// '&lt;!fg:red bold&gt;'

const style = Dye.createStyle('&lt;!fg:red bold&gt;');
// { fg: 'red', bold: true }</code></pre>
</template>