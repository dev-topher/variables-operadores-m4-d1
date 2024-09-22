const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertirTemperatura(celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9 / 5) + 32;

    console.log("Temperatura en grados Kelvin:", kelvin);
    console.log("Temperatura en grados Fahrenheit:", fahrenheit);
}

rl.question("Ingrese la temperatura en grados Celsius: ", (celsius) => {
    celsius = parseFloat(celsius);
    convertirTemperatura(celsius);
    rl.close();
});
