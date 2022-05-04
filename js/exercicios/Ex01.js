function calcular(tipo, num1, num2) {
  switch (tipo) {
    case "Soma":
      this.res = num1 + num2;
      console.log(`A Soma entre ${num1} + ${num2} é ${this.res}.`);
      break;
    case "Subtração":
      this.res = num1 - num2;
      console.log(`A Subtração entre ${num1} - ${num2} é ${this.res}.`);
      break;
    case "Multiplicação":
      this.res = num1 * num2;
      console.log(`A Multiplicação entre ${num1} x ${num2} é ${this.res}.`);
      break;
    case "Divisão":
      this.res = num1 / num2;
      console.log(`A Divisão entre ${num1} ÷ ${num2} é ${this.res}.`);
      break;
  }
}

calcular("Soma", 5, 4);
calcular("Subtração", 5, 4);
calcular("Multiplicação", 5, 4);
calcular("Divisão", 5, 4);
