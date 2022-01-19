import App from './App.svelte';

import { products } from './products';

const app = new App({
  target: document.body,
  props: {},
});

if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

export default app;
