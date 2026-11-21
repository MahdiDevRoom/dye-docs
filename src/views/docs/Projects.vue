<template>
  <h2 id="project-title">13. Project information</h2>
  <table>
    <tbody>
      <tr>
        <th scope="row">Package</th>
        <td><code>dye</code></td>
      </tr>
      <tr>
        <th scope="row">Version in source</th>
        <td><code>1.1.3</code></td>
      </tr>
      <tr>
        <th scope="row">Author</th>
        <td>MahdiDevRoom</td>
      </tr>
      <tr>
        <th scope="row">License</th>
        <td>MIT</td>
      </tr>
      <tr>
        <th scope="row">Language</th>
        <td>TypeScript</td>
      </tr>
      <tr>
        <th scope="row">Module format</th>
        <td>ES modules</td>
      </tr>
      <tr>
        <th scope="row">Runtime implementation</th>
        <td>No external runtime styling library is imported by the source.</td>
      </tr>
      <tr>
        <th scope="row">Package publishing</th>
        <td>The current package manifest sets <code>private: true</code>; the documented installation path is GitHub.
        </td>
      </tr>
      <tr>
        <th scope="row">Repository</th>
        <td><a href="https://github.com/MahdiDevRoom/dye" target="_blank"
            rel="noreferrer">github.com/MahdiDevRoom/dye</a></td>
      </tr>
    </tbody>
  </table>
  <p><a href="#home">Back to top ↑</a></p>
  <p><strong>Repository note:</strong> the current <code>package.json</code> also lists <code>dye</code> itself as a
    GitHub dependency. This self-reference should be reviewed in the package manifest; it is not required by the
    TypeScript source imports.</p>
</template>