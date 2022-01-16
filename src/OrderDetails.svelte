<script>
  import { order } from "./stores";
  import { orderTotals } from "./stores";

  function send() {
    const phoneNumber = `54${$order.phone}`;
    const itemsText = $orderTotals.items
      .map(
        (item) =>
          `${item.count} ${item.unit === "kg" ? "kg" : "unidad"} ${
            item.product.name
          }`
      )
      .join("\n");
    const text = `${itemsText}\n\n${$order.notes || ""}`.trim();
    const whatsappURL = new URL(`https://api.whatsapp.com/send`);
    whatsappURL.searchParams.set("phone", phoneNumber || "");
    whatsappURL.searchParams.set("text", text || "");
    window.open(whatsappURL);
  }
</script>

<div>
  <label>
    Teléfono:
    <br />
    <input bind:value={$order.phone} type="tel" />
  </label>

  <br />
  <label>
    Notas:
    <br />
    <textarea bind:value={$order.notes} />
  </label>

  <button on:click={send}>Enviar pedido</button>
</div>
