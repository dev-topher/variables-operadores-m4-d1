const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularSumaYPromedio() {
    let suma = 0;
    rl.question("Ingrese el número 1: ", (numero1) => {
        suma += parseFloat(numero1);
        rl.question("Ingrese el número 2: ", (numero2) => {
            suma += parseFloat(numero2);
            rl.question("Ingrese el número 3: ", (numero3) => {
                suma += parseFloat(numero3);
                rl.question("Ingrese el número 4: ", (numero4) => {
                    suma += parseFloat(numero4);
                    rl.question("Ingrese el número 5: ", (numero5) => {
                        suma += parseFloat(numero5);
                        const promedio = suma / 5;
                        console.log("La suma de los números es:", suma);
                        console.log("El promedio de los números es:", promedio);
                        rl.close();
                    });
                });
            });
        });
    });
}

calcularSumaYPromedio();
