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

  $: count = $order[id]?.count ?? 0;
  $: unit = $order[id]?.unit ?? (unit || "kg");
</script>

<div class="item">
  <h1>{emoji} {name}</h1>
  <div class="count">{count}</div>
  <button class="unit" on:click={toggleUnit}
    >{unit === "kg" ? "kg" : "u"}</button
  >
  <button on:click={increment}><PlusIcon /></button>
  <button on:click={decrement}><MinusIcon /></button>
</div>

<style>
  .item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    line-height: 1;

    margin: 8px;
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
    margin: 0;
  }

  button :global(svg) {
    width: 100%;
    height: 100%;
    fill: #e900ff;
  }

  .unit {
    width: 2.4em;
  }

  .count {
    width: 30px;
    text-align: right;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
  }

  h1 {
    font-size: 16px;
    font-weight: normal;
    flex-grow: 1;
    line-height: 1;
  }
</style>
