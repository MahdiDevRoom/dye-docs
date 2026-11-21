<template>
  <h2 id="markup-title">3. Markup syntax</h2>
  <p>A markup tag starts with <code>&lt;!</code> and ends with <code>&gt;</code>. Separate attributes with spaces.</p>
  <pre><code>Dye.render('&lt;!fg:red&gt;red text&lt;!&gt;');
  Dye.render('&lt;!bg:blue fg:white&gt;white on blue&lt;!&gt;');
  Dye.render('&lt;!bold underline&gt;bold and underlined&lt;!&gt;');</code></pre>
  <table>
    <caption>Markup tokens</caption>
    <thead>
      <tr>
        <th>Token</th>
        <th>Meaning</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>&lt;!</code></td>
        <td>Begins a tag</td>
        <td><code>&lt;!bold&gt;</code></td>
      </tr>
      <tr>
        <td><code>&gt;</code></td>
        <td>Ends a tag</td>
        <td><code>&lt;!fg:red&gt;</code></td>
      </tr>
      <tr>
        <td><code>:</code></td>
        <td>Separates a style key from its value</td>
        <td><code>fg:red</code></td>
      </tr>
      <tr>
        <td><code>(</code> and <code>)</code></td>
        <td>Wrap function-style color arguments</td>
        <td><code>rgb(255 128 0)</code></td>
      </tr>
      <tr>
        <td>Space</td>
        <td>Separates tag attributes and numeric arguments</td>
        <td><code>&lt;!bold fg:blue&gt;</code></td>
      </tr>
      <tr>
        <td><code>&lt;!&gt;</code></td>
        <td>Resets the active style</td>
        <td><code>&lt;!fg:red&gt;red&lt;!&gt;</code></td>
      </tr>
    </tbody>
  </table>
  <h3>Combining attributes</h3>
  <p>Multiple effects and color settings can be placed in one tag.</p>
  <pre><code>Dye.render('&lt;!fg:brightCyan bg:code(236) bold underline&gt;Build passed&lt;!&gt;');</code></pre>
</template>
