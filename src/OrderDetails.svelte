<script>
  import { order } from "./stores";
  import { orderTotals } from "./stores";
  import WhatsappIcon from "./icons/whatsapp.svg";

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
    Enviar a
    <br />
    <input bind:value={$order.phone} type="tel" placeholder="1145678900" />
  </label>

  <br />
  <label>
    Notas
    <br />
    <textarea bind:value={$order.notes} />
  </label>

  <button on:click={send}>Enviar pedido <WhatsappIcon /></button>
</div>

<style>
  input,
  textarea {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #fafafa;
    border-radius: 5px;
    color: #fff;

    margin: 5px 0;

    width: 100%;
  }

  button {
    background: var(--header-color);
    border: 1px solid #fafafa;
    border-radius: 5px;
    color: #fff;
    margin: 10px auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  button :global(svg) {
    width: 24px;
    height: 100%;
    margin-left: 8px;
  }
</style>
