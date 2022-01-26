<script>
  import { createEventDispatcher } from "svelte";
  import { order } from "./stores";

  import PlusIcon from "./icons/plus.svg";
  import MinusIcon from "./icons/minus.svg";

  export let id;
  export let name;
  export let emoji;
  export let unit;

  const increment = () => order.increment(id);
  const decrement = () => order.decrement(id);
  const toggleUnit = () => order.toggleUnit(id);

  $: unit = $order[id]?.unit ?? (unit || "kg");
  $: count = $order[id]?.count ?? 0;
  $: selected = count > 0;
</script>

<div class="item">
  <h1>{emoji} {name}</h1>
  {#if selected}
    <button class="count" on:click={toggleUnit}>
      <div class="number">
        {unit === "kg" ? parseFloat(count).toFixed(1) : count}
      </div>
      <div class="unit">
        {unit === "kg" ? "kg" : "u"}
      </div></button
    >
  {/if}
  <button on:click={decrement}><MinusIcon /></button>
  <button on:click={increment}><PlusIcon /></button>
</div>

<style>
  .item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    line-height: 1;

    margin: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #aaa;
  }

  button {
    background: transparent;
    border-width: 0;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    margin: 0 0 0 5px;
  }

  button :global(svg) {
    width: 100%;
    height: 100%;
    fill: var(--button-color);
  }

  .count {
    width: auto;
    border-radius: 0.2em;
    line-height: 1.8em;
  }

  .number {
    width: 1.8em;
    text-align: right;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
  }

  .unit {
    width: 1.5em;
  }

  h1 {
    font-weight: normal;
    flex-grow: 1;
    line-height: 1;
  }
</style>
