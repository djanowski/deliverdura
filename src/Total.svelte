<script>
  import Product from "./Product.svelte";
  import { orderTotals } from "./stores";

  $: totalWeightKg = $orderTotals.weight.toFixed(1);
</script>

<div>
  Total: {$orderTotals.count} productos (~{totalWeightKg} kg)
</div>

<style>
</style>
