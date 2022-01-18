<script>
  import { slide } from "svelte/transition";

  import Product from "./Product.svelte";
  import Total from "./Total.svelte";
  import OrderDetails from "./OrderDetails.svelte";
  import WhatsappIcon from "./icons/whatsapp.svg";
  import CloseIcon from "./icons/close.svg";

  export let products;

  let expanded = false;
  function toggleExpanded() {
    expanded = !expanded;
  }
</script>

<main>
  <div class="top">
    <div class="summary">
      <div class="left">
        <Total />
      </div>
      <div class="right">
        <button class="expand" on:click={toggleExpanded}
          >{#if expanded}<CloseIcon />{:else}<WhatsappIcon />{/if}</button
        >
      </div>
    </div>

    {#if expanded}
      <div class="details" transition:slide>
        <OrderDetails />
      </div>
    {/if}
  </div>

  <div class="bottom">
    {#each products as product}
      <Product {...product} />
    {/each}
  </div>
</main>

<style>
  :global(:root) {
    --header-color: #81b214;
    --button-color: #f58634;
  }

  main {
  }

  .top {
    background: var(--header-color);
    color: #fff;
    position: sticky;
    top: 0;
  }

  .summary {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
  }

  .left {
    flex-grow: 1;
  }

  .right {
  }

  .details {
    padding: 10px;
  }

  button.expand {
    background: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 0;
  }

  button.expand :global(svg) {
    width: 100%;
    height: 100%;
  }

  .bottom {
    padding: 0 0 1em 0;
  }

  :global(::placeholder) {
    color: rgba(255, 255, 255, 0.4);
  }
</style>
