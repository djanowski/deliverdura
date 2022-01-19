import resolve from '@rollup/plugin-node-resolve';
//import nodeGlobals from 'rollup-plugin-node-globals';
import nodeBuiltins from 'rollup-plugin-node-builtins';
import { svelteSVG } from 'rollup-plugin-svelte-svg';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';
import multi from '@rollup/plugin-multi-entry';
import svelte from 'rollup-plugin-svelte';

export default {
  input: 'test/**/*.js',
  output: {
    sourcemap: true,
    format: 'cjs',
    name: 'tests',
    file: 'build/bundle-tests.js',
  },
  plugins: [
    nodeBuiltins(),
    multi(),
    svelte({ compilerOptions: { css: false, dev: true } }),
    svelteSVG({
      svgo: {},
    }),
    resolve({
      only: [/^svelte-/],
    }),
    css({ output: 'bundle.css' }),
    commonjs(),
    //nodeGlobals(),
  ],
  onwarn(warning, warn) {
    if (warning.code === 'UNRESOLVED_IMPORT') return;
    warn(warning);
  },
};
