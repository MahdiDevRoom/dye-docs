<template>
  <h2 id="colors-title">4. Colors and effects</h2>
  <h3>Named colors</h3>
  <p>The same 16 color names are accepted for foreground (<code>fg</code>) and background (<code>bg</code>)
    styles.</p>
  <table>
    <caption>Supported named colors</caption>
    <thead>
      <tr>
        <th>Base colors</th>
        <th>Bright variants</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>black</code></td>
        <td><code>brightBlack</code></td>
      </tr>
      <tr>
        <td><code>red</code></td>
        <td><code>brightRed</code></td>
      </tr>
      <tr>
        <td><code>green</code></td>
        <td><code>brightGreen</code></td>
      </tr>
      <tr>
        <td><code>yellow</code></td>
        <td><code>brightYellow</code></td>
      </tr>
      <tr>
        <td><code>blue</code></td>
        <td><code>brightBlue</code></td>
      </tr>
      <tr>
        <td><code>magenta</code></td>
        <td><code>brightMagenta</code></td>
      </tr>
      <tr>
        <td><code>cyan</code></td>
        <td><code>brightCyan</code></td>
      </tr>
      <tr>
        <td><code>white</code></td>
        <td><code>brightWhite</code></td>
      </tr>
    </tbody>
  </table>
  <h3>Color value formats</h3>
  <table>
    <thead>
      <tr>
        <th>Format</th>
        <th>Markup example</th>
        <th>Style object example</th>
        <th>Range</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Named color</td>
        <td><code>&lt;!fg:brightGreen&gt;</code></td>
        <td><code>{ fg: 'brightGreen' }</code></td>
        <td>One of the 16 names above</td>
      </tr>
      <tr>
        <td>24-bit RGB</td>
        <td><code>&lt;!fg:rgb(255 128 0)&gt;</code></td>
        <td><code>{ fg: 'rgb(255 128 0)' }</code></td>
        <td>Each channel is an integer from 0 to 255</td>
      </tr>
      <tr>
        <td>256-color code</td>
        <td><code>&lt;!fg:code(200)&gt;</code></td>
        <td><code>{ fg: 'code(200)' }</code></td>
        <td>Integer from 0 to 255</td>
      </tr>
    </tbody>
  </table>
  <p>Use <code>bg</code> instead of <code>fg</code> to set the background color.</p>
  <pre><code>Dye.render('&lt;!fg:rgb(255 128 0)&gt;Orange&lt;!&gt;');
Dye.render('&lt;!bg:code(24) fg:white&gt;Colored background&lt;!&gt;');</code></pre>
  <h3>Text effects</h3>
  <table>
    <caption>Supported effects</caption>
    <thead>
      <tr>
        <th>Effect</th>
        <th>Markup</th>
        <th>Style object</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bold</td>
        <td><code>bold</code></td>
        <td><code>{ bold: true }</code></td>
      </tr>
      <tr>
        <td>Dim</td>
        <td><code>dim</code></td>
        <td><code>{ dim: true }</code></td>
      </tr>
      <tr>
        <td>Italic</td>
        <td><code>italic</code></td>
        <td><code>{ italic: true }</code></td>
      </tr>
      <tr>
        <td>Underline</td>
        <td><code>underline</code></td>
        <td><code>{ underline: true }</code></td>
      </tr>
      <tr>
        <td>Blink</td>
        <td><code>blink</code></td>
        <td><code>{ blink: true }</code></td>
      </tr>
      <tr>
        <td>Inverse</td>
        <td><code>inverse</code></td>
        <td><code>{ inverse: true }</code></td>
      </tr>
      <tr>
        <td>Hidden</td>
        <td><code>hidden</code></td>
        <td><code>{ hidden: true }</code></td>
      </tr>
      <tr>
        <td>Strikethrough</td>
        <td><code>strikethrough</code></td>
        <td><code>{ strikethrough: true }</code></td>
      </tr>
    </tbody>
  </table>
  <p>For effects in a <code>Style</code> object, <code>true</code> enables an effect and <code>false</code>
    removes it while styles are being applied.</p>
</template>