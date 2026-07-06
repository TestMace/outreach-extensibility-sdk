const path = require('path');
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: [path.join(__dirname, '..', 'src', 'index.ts')],
  outfile: path.join(__dirname, '..', 'dist', 'browser', 'outreach-sdk.js'),
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['es2018'],
  minify: true,
  banner: { js: '/* Outreach Extensibility SDK (TestMace fork) - MIT License */' },
}).catch(() => process.exit(1));