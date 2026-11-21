<template>
  <h2 id="ink-title">7. Ink API</h2>
  <p><code>Ink</code> is a chainable proxy interface for composing styles and rendering a string.</p>
  <pre><code>import { Ink } from 'dye';

Ink.red('text');
Ink.bgBlue.white('text');
Ink.bold('text');
Ink.rgb(255, 0, 0)('text');
Ink.code(200)('text');</code></pre>
  <h3>Foreground colors</h3>
  <p>Access named foreground colors as properties, then call the resulting chain with the text.</p>
  <pre><code>Ink.red('Error');
Ink.brightGreen('Success');
Ink.cyan('Information');</code></pre>
  <h3>Background colors</h3>
  <p>Prefix a named color with <code>bg</code>. The color name uses the same capitalization as the foreground property.
  </p>
  <pre><code>Ink.bgBlue.white('White text on blue');
Ink.bgBrightBlack.brightWhite('Bright text on gray');</code></pre>
  <h3>Effects</h3>
  <pre><code>Ink.bold.underline('Important');
Ink.dim('Secondary text');
Ink.italic('Note');</code></pre>
  <h3>RGB and 256-color methods</h3>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Purpose</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>rgb(r, g, b)</code></td>
        <td>Set foreground using 24-bit RGB</td>
        <td><code>Ink.rgb(255, 0, 0)('Red')</code></td>
      </tr>
      <tr>
        <td><code>bgRgb(r, g, b)</code></td>
        <td>Set background using 24-bit RGB</td>
        <td><code>Ink.bgRgb(0, 0, 255)('Blue background')</code></td>
      </tr>
      <tr>
        <td><code>code(n)</code></td>
        <td>Set foreground using a 256-color index</td>
        <td><code>Ink.code(200)('Color 200')</code></td>
      </tr>
      <tr>
        <td><code>bgCode(n)</code></td>
        <td>Set background using a 256-color index</td>
        <td><code>Ink.bgCode(24)('Background 24')</code></td>
      </tr>
    </tbody>
  </table>
  <h3>Output modes</h3>
  <table>
    <thead>
      <tr>
        <th>Expression</th>
        <th>Output mode</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>Ink.red('text')</code></td>
        <td>ANSI output (default)</td>
      </tr>
      <tr>
        <td><code>Ink.markup.red('text')</code></td>
        <td>Markup string output</td>
      </tr>
      <tr>
        <td><code>Ink.ansi.red('text')</code></td>
        <td>Switches back to ANSI output</td>
      </tr>
      <tr>
        <td><code>Ink.render('&lt;!fg:red&gt;text&lt;!&gt;')</code></td>
        <td>Renders a markup string directly to ANSI</td>
      </tr>
    </tbody>
  </table>
  <h3>Disable the trailing reset</h3>
  <pre><code>Ink.red('text', false);</code></pre>
  <p>The second argument controls whether the generated output closes with a reset tag. It defaults to
    <code>true</code>.</p>
</template>