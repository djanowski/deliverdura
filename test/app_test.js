import assert from 'assert';
import { render, fireEvent } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import App from '../src/App.svelte';

describe('App', () => {
  describe('order details', () => {
    it('should format phone number', async () => {
      const user = userEvent.setup();
      const app = render(App, {});
      const sendButton = app.getByRole('button', { name: 'Finalizar pedido' });
      await user.click(sendButton);
      const phoneInput = app.getByRole('textbox', { name: 'Enviar a' });
      await user.type(phoneInput, '1555295266');
      await user.keyboard('{tab}');
      assert.equal(phoneInput.value, '1155295266');
    });
  });
});
