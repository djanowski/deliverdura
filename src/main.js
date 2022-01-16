import App from "./App.svelte";

import { products } from "./products";

const app = new App({
  target: document.body,
  props: {
    products,
  },
});

export default app;
