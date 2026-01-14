<script>
  import { order } from './stores';
  import { orderTotals } from './stores';
  import WhatsappIcon from './icons/whatsapp.svg';

  function send() {
    const phoneNumber = `54${$order.phone}`;
    const itemsText = $orderTotals.items
      .map(
        (item) =>
          `${item.count} ${item.unit === 'kg' ? 'kg' : 'unidad'} ${
            item.product.name
          }`
      )
      .join('\n');
    const text = `${itemsText}\n\n${$order.notes || ''}`.trim();
    const whatsappURL = new URL(`https://api.whatsapp.com/send`);
    whatsappURL.searchParams.set('phone', phoneNumber || '');
    whatsappURL.searchParams.set('text', text || '');
    window.open(whatsappURL);
  }

  function formatPhone(event) {
    const { target } = event;
    const match = target.value.trim().match(/15(\d{8})/);
    if (match) {
      const fixed = `11${match[1]}`;
      $order.phone = fixed;
    }
  }
</script>

<div class="form">
  <div class="field">
    <label for="phone">Teléfono</label>
    <input
      id="phone"
      on:blur={formatPhone}
      bind:value={$order.phone}
      type="tel"
      placeholder="1145678900"
    />
  </div>

  <div class="field">
    <label for="notes">Notas (opcional)</label>
    <textarea id="notes" bind:value={$order.notes} rows="3" placeholder="Indicaciones especiales..." />
  </div>

  <button class="send-btn" on:click={send}>
    Enviar por WhatsApp
    <WhatsappIcon />
  </button>
</div>

<style>
  .form {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  label {
    font-weight: 500;
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  input,
  textarea {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    padding: var(--space-sm) var(--space-md);
    width: 100%;
    font-size: 1rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }

  .send-btn {
    background: #25d366;
    border: none;
    border-radius: var(--radius-sm);
    color: white;
    padding: var(--space-md);
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    transition: background var(--transition-fast), transform var(--transition-fast);
    margin-top: var(--space-sm);
  }

  .send-btn:hover {
    background: #1fb855;
  }

  .send-btn:active {
    transform: scale(0.98);
  }

  .send-btn :global(svg) {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
</style>
