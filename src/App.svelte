<script>
  import { slide } from 'svelte/transition';

  import Product from './Product.svelte';
  import Total from './Total.svelte';
  import OrderDetails from './OrderDetails.svelte';
  import Tabs from './Tabs.svelte';
  import WhatsappIcon from './icons/whatsapp.svg';
  import CloseIcon from './icons/close.svg';
  import CopyIcon from './icons/copy.svg';

  import { products } from './products';
  import { orderTotals } from './stores';

  const TABS = ['todo', 'frutas', 'verduras'];
  let activeTab = 'todo';

  const filterProducts = (items, tab) =>
    tab === 'todo' ? items : items.filter((p) => p.categories.includes(tab));

  $: filteredProducts = filterProducts(products, activeTab);

  let expanded = false;
  function toggleExpanded() {
    expanded = !expanded;
  }

  function copyOrder() {
    const text = $orderTotals.items
      .map(
        (item) =>
          `${item.count} ${item.unit === 'kg' ? 'kg' : 'unidad'} ${item.product.name}`
      )
      .join('\n');
    navigator.clipboard.writeText(text);
  }
</script>

<main>
  <div class="top">
    <div class="summary">
      <div class="left">
        <Total />
      </div>
      <div class="right">
        <button class="header-btn" on:click={copyOrder} aria-label="Copiar pedido">
          <CopyIcon />
        </button>
        <button
          class="header-btn"
          on:click={toggleExpanded}
          aria-label="Finalizar pedido"
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

  <Tabs tabs={TABS} {activeTab} onTabChange={(tab) => (activeTab = tab)} />

  <div class="bottom">
    {#each filteredProducts as product (product.id)}
      <Product
        id={product.id}
        name={product.name}
        emoji={product.emoji}
        unit={product.unit}
        season={product.season}
      />
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
    display: flex;
    gap: 8px;
  }

  .details {
    padding: 10px;
  }

  button.header-btn {
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

  button.header-btn :global(svg) {
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
