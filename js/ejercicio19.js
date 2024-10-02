let numero = prompt("Introduce un numero para calcular su factorial");
let  factorial = 1;
for(let i = 1; i <= numero; i++){
    factorial *= i;
}
alert("El Factorial de "+ numero+" es: " + factorial);