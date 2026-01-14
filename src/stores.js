import { writable } from "svelte-local-storage-store";
import { derived } from "svelte/store";
import { products } from "./products";

function createOrder() {
  const { subscribe, set, update } = writable("order", {
    phone: null,
    notes: null,
  });

  function add(id, value) {
    update((order) => {
      const product = products.find((p) => p.id === id);
      const unit = order?.[id]?.unit ?? (product.unit || "kg");
      const count = order?.[id]?.count ?? 0;
      const step = unit === "kg" ? 0.5 : 1;
      const newCount = Math.max(0, round(parseFloat(count) + step * value));
      return {
        ...order,
        [id]: {
          ...order?.[id],
          count: newCount,
          unit,
        },
      };
    });
  }

  function round(n) {
    return parseFloat(Math.round(n * 2) / 2).toFixed(1);
  }

  return {
    subscribe,
    increment: (id) => add(id, 1),
    decrement: (id) => add(id, -1),
    set,
    clear() {
      set({ phone: null, notes: null });
    },
    toggleUnit(id) {
      update((order) => {
        const product = products.find((p) => p.id === id);
        const unitWeight = product.unitWeight;
        const currentCount = order?.[id]?.count ?? 0;
        const currentUnit = order?.[id]?.unit ?? (product.unit || "kg");
        const newUnit = currentUnit === "kg" ? "unit" : "kg";
        const newCount =
          newUnit === "kg"
            ? round(currentCount * unitWeight)
            : Math.round(currentCount / unitWeight);

        return {
          ...order,
          [id]: {
            ...order?.[id],
            count: newCount,
            unit: newUnit,
          },
        };
      });
    },
  };
}

export const order = createOrder();

export const orderTotals = derived(order, ($order) => {
  const items = Object.keys($order)
    .map((id) => ({
      ...$order[id],
      id,
      product: products.find((p) => p.id === id),
    }))
    .filter((item) => item.count > 0);

  const count = items.length;
  const weight = items
    .map(getTotalWeight)
    .reduce((accum, weight) => accum + weight, 0);

  return {
    items,
    count,
    weight,
  };
});

function getTotalWeight(item) {
  const product = products.find((p) => p.id === item.id);
  if (item.unit === "kg") return parseFloat(item.count);
  else return item.count * product.unitWeight;
}
