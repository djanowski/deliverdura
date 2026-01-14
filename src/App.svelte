<script>
  import { slide } from 'svelte/transition';

  import Product from './Product.svelte';
  import Total from './Total.svelte';
  import OrderDetails from './OrderDetails.svelte';
  import Tabs from './Tabs.svelte';
  import WhatsappIcon from './icons/whatsapp.svg';
  import CloseIcon from './icons/close.svg';
  import CopyIcon from './icons/copy.svg';
  import TrashIcon from './icons/trash.svg';

  import { products } from './products';
  import { order, orderTotals } from './stores';

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

  function clearOrder() {
    if (confirm('¿Limpiar el pedido?')) {
      order.clear();
    }
  }
</script>

<main>
  <div class="top">
    <div class="summary">
      <div class="left">
        <Total />
      </div>
      <div class="right">
        <button class="header-btn" on:click={clearOrder} aria-label="Limpiar pedido">
          <TrashIcon />
        </button>
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
  main {
    min-height: 100vh;
  }

  .top {
    background: var(--bg-header);
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: var(--shadow-md);
  }

  .summary {
    display: flex;
    align-items: center;
    width: 100%;
    padding: var(--space-md);
    gap: var(--space-md);
  }

  .left {
    flex-grow: 1;
  }

  .right {
    display: flex;
    gap: var(--space-sm);
  }

  .details {
    padding: var(--space-md);
    background: var(--bg-primary);
    border-top: 1px solid var(--border-color);
  }

  button.header-btn {
    background: var(--accent-muted);
    border: none;
    border-radius: var(--radius-sm);
    color: var(--text-secondary);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-sm);
    margin: 0;
    transition: background var(--transition-fast), color var(--transition-fast);
  }

  @media (hover: hover) {
    button.header-btn:hover {
      background: var(--accent-primary);
      color: white;
    }
  }

  button.header-btn :global(svg) {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }

  .bottom {
    padding: var(--space-sm) 0 var(--space-lg) 0;
  }
</style>
