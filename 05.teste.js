let texto = "desenvolvedor";
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}

console.log("Texto original:", texto);
console.log("Texto invertido:", textoInvertido);
