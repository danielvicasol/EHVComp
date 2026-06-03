# App de comparativa de consumos

Aplicación **visual** con cálculo en tiempo real para comparar el coste de uso de un vehículo eléctrico frente a uno de gasolina.

## Incluye
- Inputs de `€/kWh`, `€/L gasolina` y `km/año`
- Slider de kilómetros recorridos
- Actualización en tiempo real de:
  - Coste por km
  - Coste anual
  - Ahorro por km
  - Ahorro anual
  - Ahorro acumulado

## Valores por defecto
Coinciden con la infografía actual:
- `€/kWh`: **0,12**
- `€/L gasolina`: **1,37**
- `km/año`: **15.000**
- `km recorridos`: **28.000**
- `consumo eléctrico`: **16,8 kWh/100 km**
- `consumo gasolina`: **7 L/100 km**

## Ejecutar en local
No requiere Node ni build. Basta con abrir `index.html` en el navegador.

## Subir a GitHub y desplegar en Render
### Opción 1: Static Site desde el panel
1. Sube estos archivos a un repositorio de GitHub.
2. En Render, crea un **Static Site**.
3. Conecta el repositorio.
4. Usa estos valores:
   - **Build Command**: dejar vacío
   - **Publish Directory**: `.`

### Opción 2: con `render.yaml`
Este proyecto ya incluye `render.yaml`, así que Render puede detectar la configuración automáticamente.

## Estructura
- `index.html`
- `styles.css`
- `script.js`
- `render.yaml`
