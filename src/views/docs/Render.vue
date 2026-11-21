<template>
  <h2 id="render-title">6. Rendering with Dye.render</h2>
  <p><code>Dye.render</code> accepts three input forms.</p>
  <h3>Markup string</h3>
  <pre><code>const output = Dye.render('&lt;!fg:green&gt;Ready&lt;!&gt;');
console.log(output);</code></pre>
  <h3>Text and a Style object</h3>
  <pre><code>const output = Dye.render('Ready', {
  fg: 'green',
  bold: true,
});
console.log(output);</code></pre>
  <h3>StyledBlock object</h3>
  <pre><code>const output = Dye.render({
  text: 'Ready',
  style: { fg: 'green', bold: true },
});
console.log(output);</code></pre>
  <table>
    <caption>render overloads</caption>
    <thead>
      <tr>
        <th>Call</th>
        <th>Input</th>
        <th>Behavior</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>render(markup)</code></td>
        <td>Markup string</td>
        <td>Parses tags and converts style instructions to ANSI sequences.</td>
      </tr>
      <tr>
        <td><code>render(text, style)</code></td>
        <td>Plain string and <code>Style</code></td>
        <td>Applies the style, appends the text, and appends ANSI reset.</td>
      </tr>
      <tr>
        <td><code>render(block)</code></td>
        <td><code>StyledBlock</code></td>
        <td>Applies the block style, appends its text, and appends ANSI reset.</td>
      </tr>
    </tbody>
  </table>
  <p><strong>Important:</strong> the markup-string overload emits reset only when the markup contains a reset tag. Add
    <code>&lt;!&gt;</code> explicitly when needed. The other two overloads append reset automatically.</p>
</template>