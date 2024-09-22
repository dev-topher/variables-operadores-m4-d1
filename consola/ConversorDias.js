const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularEquivalenteDias(dias) {
    const años = Math.floor(dias / 365);
    const semanas = Math.floor((dias % 365) / 7);
    const diasRestantes = (dias % 365) % 7;

    console.log("Equivalente en años:", años);
    console.log("Semanas restantes:", semanas);
    console.log("Días restantes:", diasRestantes);
}

rl.question("Ingrese la cantidad de días: ", (dias) => {
    dias = parseInt(dias);
    calcularEquivalenteDias(dias);
    rl.close();
});
