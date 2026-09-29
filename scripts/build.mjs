// Bundles the ES module sources in src/ into two browser-ready IIFE files:
//   dist/fab.js      - readable, for local debugging
//   dist/fab.min.js  - minified, the file the CDN examples point at
//
// The minified file is also copied to the repository root as fab.min.js,
// so that https://cdn.jsdelivr.net/gh/<user>/<repo>@<tag>/fab.min.js works
// without a "dist/" segment in the URL.

import { build } from 'esbuild';
import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));

const banner = `/*! Contact FAB v${pkg.version} | MIT License | https://github.com/l7zqs/contact-fab */`;

mkdirSync(join(root, 'dist'), { recursive: true });

async function run() {
  const shared = {
    entryPoints: [join(root, 'src/index.js')],
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: ['es2018'],
    banner: { js: banner },
    logLevel: 'info'
  };

  await build({ ...shared, outfile: join(root, 'dist/fab.js'), minify: false });
  await build({ ...shared, outfile: join(root, 'dist/fab.min.js'), minify: true });

  copyFileSync(join(root, 'dist/fab.min.js'), join(root, 'fab.min.js'));

  const size = (p) => (readFileSync(p).length / 1024).toFixed(2);
  console.log(`\ndist/fab.js      ${size(join(root, 'dist/fab.js'))} KB`);
  console.log(`dist/fab.min.js  ${size(join(root, 'dist/fab.min.js'))} KB (copied to /fab.min.js)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
