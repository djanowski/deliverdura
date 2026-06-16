import assert from 'assert';
import {
  formatLine,
  cardNumber,
  cardLabel,
  stepFor,
  isTogglable,
} from '../src/units';

describe('units formatting', () => {
  describe('formatLine (message text)', () => {
    it('formats kg whole and fractional', () => {
      assert.equal(formatLine(2, 'kg', 'Papa'), '2 kg Papa');
      assert.equal(formatLine(1.5, 'kg', 'Papa'), '1,5 kg Papa');
    });

    it('formats unit singular and plural', () => {
      assert.equal(formatLine(1, 'unit', 'Lechuga'), '1 unidad Lechuga');
      assert.equal(formatLine(3, 'unit', 'Lechuga'), '3 unidades Lechuga');
    });

    it('formats docena with Unicode halves and "doc." abbreviation', () => {
      assert.equal(formatLine(0.5, 'docena', 'Huevos'), '½ doc. Huevos');
      assert.equal(formatLine(1, 'docena', 'Huevos'), '1 doc. Huevos');
      assert.equal(formatLine(1.5, 'docena', 'Huevos'), '1½ doc. Huevos');
      assert.equal(formatLine(2, 'docena', 'Huevos'), '2 doc. Huevos');
    });

    it('falls back to kg for an unknown unit', () => {
      assert.equal(formatLine(2, undefined, 'X'), '2 kg X');
    });
  });

  describe('cardNumber (on-card number, Argentine decimals)', () => {
    it('forces one decimal for kg', () => {
      assert.equal(cardNumber(0.5, 'kg'), '0,5');
      assert.equal(cardNumber(2, 'kg'), '2,0');
    });

    it('renders docena as Unicode halves', () => {
      assert.equal(cardNumber(0.5, 'docena'), '½');
      assert.equal(cardNumber(1, 'docena'), '1');
      assert.equal(cardNumber(1.5, 'docena'), '1½');
      assert.equal(cardNumber(2.5, 'docena'), '2½');
    });

    it('keeps integers for unit', () => {
      assert.equal(cardNumber(3, 'unit'), '3');
    });
  });

  describe('cardLabel', () => {
    it('maps each unit to its short label', () => {
      assert.equal(cardLabel('kg'), 'kg');
      assert.equal(cardLabel('unit'), 'u');
      assert.equal(cardLabel('docena'), 'doc');
      assert.equal(cardLabel('???'), 'kg');
    });
  });

  describe('stepFor', () => {
    it('returns the step per unit', () => {
      assert.equal(stepFor('kg'), 0.5);
      assert.equal(stepFor('unit'), 1);
      assert.equal(stepFor('docena'), 0.5);
    });
  });

  describe('isTogglable', () => {
    it('only kg and unit can toggle', () => {
      assert.equal(isTogglable('kg'), true);
      assert.equal(isTogglable('unit'), true);
      assert.equal(isTogglable('docena'), false);
    });
  });
});
