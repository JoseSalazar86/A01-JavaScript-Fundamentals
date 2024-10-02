let cadena = prompt("Introduce la cadena para saber si es palindromo: ");
let esPalindroma = true;
let cadenaNueva = cadena.toUpperCase().replace(/\s/g, '');
for (let i = 0; i < cadenaNueva.length / 2; i++) {
    if (cadenaNueva[i]!== cadenaNueva[cadenaNueva.length -1 - i]) {
        esPalindroma = false;
    }
}
if (esPalindroma) {
    alert("La cadena es palindroma");
} else {
    alert("La cadena no es palindroma");
}