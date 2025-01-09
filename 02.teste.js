let numero = 21;
let fibonacci = [0, 1];
let pertence = false;

while (fibonacci[fibonacci.length - 1] < numero) {
  let proximo =
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(proximo);
}

for (let i = 0; i < fibonacci.length; i++) {
  if (fibonacci[i] === numero) {
    pertence = true;
    break;
  }
}

if (pertence) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
