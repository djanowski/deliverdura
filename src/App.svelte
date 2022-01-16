<script>
  import Product from "./Product.svelte";
  import Total from "./Total.svelte";
  import OrderDetails from "./OrderDetails.svelte";

  export let name;
  export let products;
</script>

<main>
  {#each products as product}
    <Product {...product} />
  {/each}

  <hr />
  <Total />

  <hr />
  <OrderDetails />
</main>
