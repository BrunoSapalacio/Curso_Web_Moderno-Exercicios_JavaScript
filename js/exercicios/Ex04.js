function dividendoDivisor(valor1, valor2) {
  this.calcular = valor1 / valor2;
  console.log(`Dividendo ${valor1} | Divisor ${valor2} = Resultado ${Math.floor(this.calcular) * valor2}`);
  this.calcular = valor1 - Math.floor(this.calcular) * valor2;
  console.log(`Resto = ${this.calcular}`);
}

dividendoDivisor(22, 4);
