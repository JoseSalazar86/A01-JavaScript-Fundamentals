let numero = prompt("Introduzca un numero");

while (isNaN(numero)) {
    alert("Introduzca un numero");
    numero = prompt("Introduzca un numero");
}