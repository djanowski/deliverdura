<script>
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

<div class="item">
  <h1>
    {emoji} {name}
    {#if seasonStatus}
      <span class="season-indicator {seasonStatus}"></span>
    {/if}
  </h1>
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

  .season-indicator {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-left: 4px;
    vertical-align: middle;
  }

  .in-season {
    background-color: #4caf50;
  }

  .transitional {
    background-color: #ffc107;
  }

  .out-of-season {
    background-color: #f44336;
  }
</style>
