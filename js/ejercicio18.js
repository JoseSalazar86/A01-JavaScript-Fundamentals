let numero = prompt("Introduce los numeros: ");
let suma = 0;

for (let i = 0; i < numero.length; i++) {
    suma += parseInt(numero[i]);
}

alert("La suma de los digitos es: "+suma);