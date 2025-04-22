function solicitarNumero() {
  let entrada;
  let numero;

  do {
    entrada = prompt("Ingresa un número para calcular su factorial:");
    numero = Number(entrada);

    if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
      alert("Por favor, ingresa un número entero válido y positivo.");
    } else {
      break;
    }
  } while (true);

  return numero;
}

function calcularFactorial(n) {
  if (n === 0 || n === 1) return 1;

  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

const numeroIngresado = solicitarNumero();
const resultado = calcularFactorial(numeroIngresado);
console.log(`El factorial de ${numeroIngresado} es: ${resultado}`);
