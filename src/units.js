// Single source of truth for order units: step size, on-card label, and the
// word used in the WhatsApp/copy message. Kept here so formatting isn't
// duplicated across stores and components.

export const units = {
  kg: { step: 0.5, card: "kg", word: () => "kg" },
  unit: { step: 1, card: "u", word: (n) => (n === 1 ? "unidad" : "unidades") },
  // "doc." abbreviation sidesteps singular/plural; counts render as ½ / 1½.
  docena: { step: 0.5, card: "doc", word: () => "doc." },
};

const u = (unit) => units[unit] ?? units.kg;

// ponytail: Argentine decimals via dot->comma swap. Quantities are simple
// (halves, 1 decimal), so no Intl needed. Use Intl.NumberFormat('es-AR') if
// thousands separators or currency ever matter.
export const formatNumber = (n) => String(n).replace(".", ",");

// Halves as Unicode fractions: 0.5 -> "½", 1 -> "1", 1.5 -> "1½".
const half = (n) => {
  const whole = Math.floor(n);
  return n - whole >= 0.5 ? (whole ? `${whole}½` : "½") : String(whole);
};

export const stepFor = (unit) => u(unit).step;
export const isTogglable = (unit) => unit === "kg" || unit === "unit";
export const cardNumber = (count, unit) =>
  unit === "docena"
    ? half(Number(count))
    : formatNumber(u(unit).step === 1 ? count : parseFloat(count).toFixed(1));
export const cardLabel = (unit) => u(unit).card;
export const formatLine = (count, unit, name) => {
  const num = unit === "docena" ? half(Number(count)) : formatNumber(count);
  return `${num} ${u(unit).word(Number(count))} ${name}`;
};
