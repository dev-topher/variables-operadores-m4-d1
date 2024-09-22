const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese el primer número: ", (numero1) => {
    rl.question("Ingrese el segundo número: ", (numero2) => {
        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);

        if (numero1 <= 0 || numero2 <= 0 || numero1 === numero2) {
            console.log("Ambos números deben ser diferentes y mayores a cero. Por favor, ingréselos nuevamente.");
            rl.close();
            return;
        }

        const suma = numero1 + numero2;
        const resta = numero1 - numero2;
        const division = numero1 / numero2;
        const multiplicacion = numero1 * numero2;
        const modulo = numero1 % numero2;

        console.log("Suma:", suma);
        console.log("Resta:", resta);
        console.log("División:", division);
        console.log("Multiplicación:", multiplicacion);
        console.log("Módulo:", modulo);

        rl.close();
    });
});
