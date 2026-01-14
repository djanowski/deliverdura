<script>
  import { orderTotals } from "./stores";

  $: totalWeightKg = $orderTotals.weight.toFixed(1);
  $: hasItems = $orderTotals.count > 0;
</script>

<div class="total" class:has-items={hasItems}>
  <span class="count">{$orderTotals.count}</span>
  <span class="label">productos</span>
  <span class="separator">·</span>
  <span class="weight">{totalWeightKg} kg</span>
</div>

<style>
  .total {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-secondary);
    padding-left: var(--space-sm);
  }

  .total.has-items {
    color: var(--text-primary);
  }

  .count {
    font-weight: 600;
  }

  .separator {
    color: var(--text-muted);
  }

  .weight {
    font-weight: 600;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
  }
</style>
