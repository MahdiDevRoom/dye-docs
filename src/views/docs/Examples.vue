<template>
  <h2 id="examples-title">11. Examples</h2>
  <h3>Colored logging</h3>
  <pre><code>import Dye from 'dye';

const log = (...args: unknown[]) =&gt; {
  console.log(Dye.render('&lt;!fg:brightCyan&gt;[log]&lt;!&gt;'), ...args);
};

log('Application started');</code></pre>
  <h3>Success and error helpers</h3>
  <pre><code>import { Ink } from 'dye';

const ok = (message: string) =&gt; Ink.green(message);
const fail = (message: string) =&gt; Ink.red(message);

console.log(ok('OK'));
console.log(fail('FAIL'));</code></pre>
  <h3>Rainbow text</h3>
  <pre><code>import Dye from 'dye';

const rainbow = (value: string) =&gt; {
  const colors = ['red', 'yellow', 'green', 'cyan', 'blue', 'magenta'] as const;

  return [...value]
    .map((character, index) =&gt;
      Dye.render(character, { fg: colors[index % colors.length] }),
    )
    .join('');
};

console.log(rainbow('HELLO!'));</code></pre>
  <h3>Combine markup and Ink</h3>
  <pre><code>import Dye, { Ink } from 'dye';

const banner = Ink.bgBlue.white.bold(' BUILD ');
console.log(Dye.render('&lt;!fg:green&gt;✓&lt;!&gt;'), banner, 'done');</code></pre>
</template>