const ctx = document.getElementById('chart').getContext('2d');

const defaults = {
  precioKwh:0.12,
  precioGasolina:1.37,
  kmAnuales:15000
}

let chart;

function calc(){
  const kwh = parseFloat(precioKwh.value);
  const gas = parseFloat(precioGasolina.value);
  const km = parseFloat(kmAnuales.value);
  const consumoGas = parseFloat(consumoGasolina.value);

  const costeElec = (16.8/100)*kwh*km;
  const costeGas = (consumoGas/100)*gas*km;
  const ahorro = costeGas - costeElec;

  electrico.textContent = costeElec.toFixed(0)+"€";
  gasolina.textContent = costeGas.toFixed(0)+"€";
  ahorro.textContent = ahorro.toFixed(0)+"€";

  updateChart(costeElec,costeGas);
}

function updateChart(elec,gas){
  if(chart) chart.destroy();
  chart = new Chart(ctx,{
    type:'bar',
    data:{
      labels:['Eléctrico','Gasolina'],
      datasets:[{data:[elec,gas],backgroundColor:['blue','red']}]
    }
  });
}

function resetForm(){
  precioKwh.value=defaults.precioKwh;
  precioGasolina.value=defaults.precioGasolina;
  kmAnuales.value=defaults.kmAnuales;
  consumoGasolina.value=7;
  calc();
}

function exportImg(){
  const link=document.createElement('a');
  link.download='grafico.png';
  link.href=chart.toBase64Image();
  link.click();
}

document.querySelectorAll('input,select').forEach(e=>e.addEventListener('input',calc));
document.getElementById('reset').addEventListener('click',resetForm);
document.getElementById('export').addEventListener('click',exportImg);

// cargar chartjs
const s=document.createElement('script');
s.src='https://cdn.jsdelivr.net/npm/chart.js';
s.onload=calc;
document.head.appendChild(s);
