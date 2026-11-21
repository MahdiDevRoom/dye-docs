<template>
  <h2 id="install-title">Installation</h2>
  <p>Install the package directly from GitHub:</p>
  <pre><code>npm i github:mahdidevroom/dye</code></pre>
  <h3>Package manager notes</h3>
  <p>If npm blocks Git dependencies, use the option that matches your npm version.</p>
  <ul>
    <li><strong>npm 12.x</strong>
      <pre><code>npm install github:mahdidevroom/dye --allow-git=all

# Or configure npm once:
npm config set allow-git=all
npm i github:mahdidevroom/dye</code></pre>
    </li>
    <li><strong>npm 11.x</strong>
      <pre><code>npm install github:mahdidevroom/dye --userconfig=/dev/null</code></pre>
    </li>
  </ul>
</template>