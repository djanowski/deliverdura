<script>
  import { fade } from "svelte/transition";
  import { order } from "./stores";

  import PlusIcon from "./icons/plus.svg";
  import MinusIcon from "./icons/minus.svg";

  export let id;
  export let name;
  export let emoji;
  export let unit;
  export let season = [];

  const increment = () => order.increment(id);
  const decrement = () => order.decrement(id);
  const toggleUnit = () => order.toggleUnit(id);

  const getSeasonStatus = (seasonMonths) => {
    if (!seasonMonths || seasonMonths.length === 0) return null;
    const currentMonth = new Date().getMonth() + 1;
    if (seasonMonths.includes(currentMonth)) return "in-season";
    const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
    if (seasonMonths.includes(prevMonth) || seasonMonths.includes(nextMonth))
      return "transitional";
    return "out-of-season";
  };

  $: seasonStatus = getSeasonStatus(season);
  $: unit = $order[id]?.unit ?? (unit || "kg");
  $: count = $order[id]?.count ?? 0;
  $: selected = count > 0;
</script>

<div class="item" class:selected>
  <span class="emoji">{emoji}</span>
  <div class="info">
    <span class="name">{name}</span>
    {#if seasonStatus}
      <span class="season-indicator {seasonStatus}"></span>
    {/if}
  </div>
  {#if selected}
    <button class="count" on:click={toggleUnit}>
      {#key unit}
        <span class="count-content" in:fade={{ duration: 100 }}>
          <span class="number">
            {unit === "kg" ? parseFloat(count).toFixed(1) : count}
          </span>
          <span class="unit-label">
            {unit === "kg" ? "kg" : "u"}
          </span>
        </span>
      {/key}
    </button>
  {/if}
  <div class="actions">
    <button class="action-btn" on:click={decrement} aria-label="Quitar"><MinusIcon /></button>
    <button class="action-btn" on:click={increment} aria-label="Agregar"><PlusIcon /></button>
  </div>
</div>

<style>
  .item {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    background: var(--bg-card);
    border-radius: var(--radius-md);
    margin: var(--space-sm) var(--space-md);
    padding: var(--space-sm) var(--space-md);
    box-shadow: var(--shadow-sm);
  }

  .emoji {
    font-size: 1.75rem;
    line-height: 1;
  }

  .info {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    min-width: 0;
  }

  .name {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .season-indicator {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: var(--radius-full);
    flex-shrink: 0;
  }

  .in-season {
    background-color: #10b981;
  }

  .transitional {
    background-color: #f59e0b;
  }

  .out-of-season {
    background-color: #ef4444;
  }

  .count {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-primary);
    color: white;
    border: none;
    border-radius: var(--radius-sm);
    padding: 0 var(--space-sm);
    height: 36px;
    font-weight: 600;
  }

  .count-content {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  .number {
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
  }

  .unit-label {
    font-size: 0.75rem;
    opacity: 0.9;
  }

  .actions {
    display: flex;
    gap: var(--space-xs);
  }

  .action-btn {
    background: var(--accent-muted);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-sm);
    transition: background var(--transition-fast), transform var(--transition-fast);
  }

  @media (hover: hover) {
    .action-btn:hover {
      background: var(--accent-primary);
    }

    .action-btn:hover :global(svg) {
      fill: white;
    }
  }

  .action-btn:active {
    transform: scale(0.95);
  }

  .action-btn :global(svg) {
    width: 16px;
    height: 16px;
    fill: var(--text-secondary);
    transition: fill var(--transition-fast);
  }
</style>
