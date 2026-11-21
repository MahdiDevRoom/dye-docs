<template>
  <h2 id="behavior-title">12. Behavior and limitations</h2>
  <ul>
    <li><strong>Invalid markup and styles:</strong> invalid style attributes and unsupported colors are ignored by the
      style application logic. An unrecognized tag is kept as text by the markup parser.</li>
    <li><strong>Color ranges:</strong> RGB channels and 256-color indices are validated as integers from 0 through 255.
    </li>
    <li><strong>Reset behavior:</strong> markup rendering does not add a final reset automatically; include
      <code>&lt;!&gt;</code> when you need one. The text-plus-style and block overloads append reset.</li>
    <li><strong>Text length:</strong> <code>textLength</code> returns JavaScript string length, not terminal column
      width.</li>
    <li><strong>Markup structure:</strong> tags are parsed as inline style instructions; this is not an HTML parser and
      does not create a nested DOM tree.</li>
    <li><strong>Ink modes:</strong> <code>Ink.markup</code> switches the proxy to markup output and
      <code>Ink.ansi</code> switches it back to ANSI output.</li>
  </ul>
</template>