// Global DOM for the whole test run. The test bundle concatenates every
// test file, and @testing-library/svelte registers a global afterEach cleanup
// that touches `window`/`document`, so those globals must exist for all tests
// (not just the ones that render components). Loaded via mocha's `require`.
const { JSDOM } = require('jsdom');

const { window } = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost:3000',
  pretendToBeVisual: true,
});

global.window = window;
global.document = window.document;
// Node 26 exposes a stub `localStorage` that warns; force jsdom's working one.
global.localStorage = window.localStorage;

Object.getOwnPropertyNames(window)
  .filter((key) => !key.startsWith('_') && !(key in global))
  .forEach((key) => {
    global[key] = window[key];
  });
