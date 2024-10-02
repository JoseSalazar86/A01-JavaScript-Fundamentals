
let contador = 0;
for (let i = 1; i <= 5; i++) {
    let edad = prompt("Introduzca su edad");
    if (edad >= 18) {
        contador++;
    }
}
alert("Se ha introducido: "+ contador+" mayores de 18");

