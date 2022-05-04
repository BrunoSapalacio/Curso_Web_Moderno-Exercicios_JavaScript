function triangulo(num1, num2, num3) {
  if (num1 == num2 && num1 == num3) {
    this.tipo = "Equilátero";
  } else if (num1 == num2 || num1 == num3 || num2 == num3) {
    this.tipo = "Isósceles";
  } else {
    this.tipo = "Escaleno";
  }
  console.log(`Tipo do triângulo: ${this.tipo}`);
  console.log(`Primeiro lado: ${num1}, Segundo lado: ${num2}, Terceiro lado: ${num3}`);
}

triangulo(5, 5, 5);
triangulo(5, 5, 1);
triangulo(5, 4, 1);
