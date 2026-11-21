<template>
  <h2 id="utilities-title">9. Text utilities</h2>
  <h3>innerText</h3>
  <p>Extracts the plain text from a markup string or concatenates the text fields of styled blocks.</p>
  <pre><code>Dye.innerText('&lt;!fg:red&gt;Hello&lt;!&gt; World');
// 'Hello World'

Dye.innerText([{ text: 'Hello' }, { text: ' world' }]);
// 'Hello world'</code></pre>
  <h3>textLength</h3>
  <p>Returns the JavaScript string length of the plain text after markup tags are removed.</p>
  <pre><code>Dye.textLength('&lt;!fg:red&gt;Hello&lt;!&gt; World');
// 11</code></pre>
  <p><strong>Note:</strong> this is JavaScript string length (UTF-16 code units), not terminal display width. It does
    not calculate the visual width of wide characters or account for combining marks.</p>
</template>