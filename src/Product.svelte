<script>
  import { createEventDispatcher } from "svelte";
  import { order } from "./stores";

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
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button>
</div>

<style>
  .item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    line-height: 1;
  }

  .unit {
    width: 35px;
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
