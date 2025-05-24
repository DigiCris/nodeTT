// Paso 1: Crear un array de precios
const precios = [100, 250, 80, 150, 300, 45, 60, 90, 120, 200];

// Paso 2: Calcular el precio con IVA incluido (21%)
const preciosConIVA = precios.map(precio => {
    const iva = 0.21;
    return precio + (precio * iva);
});

// Paso 3: Imprimir los precios ajustados usando template literals
preciosConIVA.forEach(precioConIVA => {
    console.log(`El precio es: ${precioConIVA.toFixed(2)}.- IVA incluido.`);
});