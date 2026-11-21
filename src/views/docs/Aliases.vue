<template>
  <h2 id="aliases-title">5. Aliases and reset</h2>
  <table>
    <caption>Built-in markup aliases</caption>
    <thead>
      <tr>
        <th>Tag</th>
        <th>Expands to</th>
        <th>Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>&lt;!&gt;</code></td>
        <td><code>reset</code></td>
        <td>Clears the current style state</td>
      </tr>
      <tr>
        <td><code>&lt;!error&gt;</code></td>
        <td><code>fg:brightRed bold</code></td>
        <td>Error messages</td>
      </tr>
      <tr>
        <td><code>&lt;!warning&gt;</code></td>
        <td><code>fg:yellow bold</code></td>
        <td>Warnings</td>
      </tr>
      <tr>
        <td><code>&lt;!info&gt;</code></td>
        <td><code>fg:brightCyan</code></td>
        <td>Informational messages</td>
      </tr>
      <tr>
        <td><code>&lt;!success&gt;</code></td>
        <td><code>fg:brightGreen</code></td>
        <td>Successful operations</td>
      </tr>
    </tbody>
  </table>
  <pre><code>console.log(Dye.render('&lt;!error&gt;Something went wrong&lt;!&gt;'));
console.log(Dye.render('&lt;!warning&gt;Check this value&lt;!&gt;'));
console.log(Dye.render('&lt;!info&gt;Starting build&lt;!&gt;'));
console.log(Dye.render('&lt;!success&gt;Build complete&lt;!&gt;'));</code></pre>
  <p>A reset tag is a style-state instruction. In markup rendering, include <code>&lt;!&gt;</code> when the output
    should explicitly return to the terminal's default style.</p>
</template>