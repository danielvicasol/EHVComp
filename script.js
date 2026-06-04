const CONSUMO_ELECTRICO = 16.8; // kWh/100km
const CONSUMO_GASOLINA = 7; // L/100km

const els = {
  precioKwh: document.getElementById('precioKwh'),
  precioGasolina: document.getElementById('precioGasolina'),
  kmAnuales: document.getElementById('kmAnuales'),
  km: document.getElementById('km'),
  kmValor: document.getElementById('kmValor'),
  costeElectricoKm: document.getElementById('costeElectricoKm'),
  costeElectricoAnual: document.getElementById('costeElectricoAnual'),
  costeGasolinaKm: document.getElementById('costeGasolinaKm'),
  costeGasolinaAnual: document.getElementById('costeGasolinaAnual'),
  ahorroPorKm: document.getElementById('ahorroPorKm'),
  ahorroAnual: document.getElementById('ahorroAnual'),
  ahorroTotal: document.getElementById('ahorroTotal')
};

function euro(num, decimals = 2) {
  return new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num) + ' €';
}

function entero(num) {
  return new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(num);
}

function safeNumber(value, fallback = 0) {
  const n = Number.parseFloat(value);
  return Number.isFinite(n) ? n : fallback;
}

function render() {
  const precioKwh = safeNumber(els.precioKwh.value, 0);
  const precioGasolina = safeNumber(els.precioGasolina.value, 0);
  const kmAnuales = safeNumber(els.kmAnuales.value, 0);
  const km = safeNumber(els.km.value, 0);

  const costeElectricoKm = (CONSUMO_ELECTRICO / 100) * precioKwh;
  const costeGasolinaKm = (CONSUMO_GASOLINA / 100) * precioGasolina;
  const ahorroPorKm = costeGasolinaKm - costeElectricoKm;
  const ahorroAnual = kmAnuales * ahorroPorKm;
  const ahorroTotal = km * ahorroPorKm;

  els.kmValor.textContent = `${entero(km)} km`;
  els.costeElectricoKm.textContent = euro(costeElectricoKm, 4);
  els.costeElectricoAnual.textContent = euro(costeElectricoKm * kmAnuales, 0);
  els.costeGasolinaKm.textContent = euro(costeGasolinaKm, 4);
  els.costeGasolinaAnual.textContent = euro(costeGasolinaKm * kmAnuales, 0);
  els.ahorroPorKm.textContent = euro(ahorroPorKm, 4);
  els.ahorroAnual.textContent = euro(ahorroAnual, 0);
  els.ahorroTotal.textContent = euro(ahorroTotal, 0);
}

['input', 'change'].forEach(evt => {
  Object.values(els).forEach(el => {
    if (el && (el.tagName === 'INPUT')) {
      el.addEventListener(evt, render);
    }
  });
});

render();
