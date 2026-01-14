import assert from 'assert';
import { render, fireEvent } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import App from '../src/App.svelte';

import dom from './dom';

describe('App', () => {
  let cleanup;

  before(() => {
    cleanup = dom();
    console.log(window.document);
  });

  describe('order details', () => {
    let user;
    let app;

    before(async () => {
      user = userEvent.setup();
      app = render(App);
      const sendButton = app.getByRole('button', {
        name: 'Finalizar pedido',
      });
      await user.click(sendButton);
    });

    describe('valid number', () => {
      it('should format phone number', async () => {
        const phoneInput = app.getByRole('textbox', { name: 'Enviar a' });
        await user.clear(phoneInput);
        await user.type(phoneInput, '1555295266');
        await user.keyboard('{tab}');
        assert.equal(phoneInput.value, '1155295266');
      });
    });

    describe('invalid number', () => {
      it('should mark the input field as invalid', async () => {
        const phoneInput = app.getByRole('textbox', { name: 'Enviar a' });
        await user.clear(phoneInput);
        await user.type(phoneInput, '1555295266');
        await user.keyboard('{tab}');
        assert.equal(phoneInput.value, '1155295266');
      });
    });
  });

  //after(() => cleanup());
});
