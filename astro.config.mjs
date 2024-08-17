import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

// https://astro.build/config
// export default defineConfig({
//   output: "server",
//   adapter: netlify({
//     edgeMiddleware: true,
//   })
// });

export default defineConfig({
    site: 'https://jeansolis.github.io',
    base: 'astro-test',
  })