<template>
  <h2 id="quick-start-title">Quick Start</h2>
  <p><code>Dye</code> is the default export. <code>Ink</code> is also available as a named export.</p>
  <pre><code>import Dye, { Ink } from 'dye';

// Markup API
console.log(Dye.render('&lt;!fg:green&gt;Hello&lt;!&gt; World'));

// Chainable Ink API
console.log(Ink.green('Hello, dye!'));</code></pre>

  <p><a href="#docs" role="button">Get Started →</a></p>

  <h2 id="why-dye-title">Two APIs, one styling engine</h2>
  <ul>
    <li><strong>Dye:</strong> describe styles inline with readable markup tags.</li>
    <li><strong>Ink:</strong> use a chainable, Chalk-like API for familiar color and effect composition.</li>
    <li><strong>TypeScript:</strong> the package ships its own type declarations.</li>
    <li><strong>Small runtime footprint:</strong> the implementation uses Node.js ANSI escape sequences directly and
      does not import an external runtime styling library.</li>
  </ul>
</template>