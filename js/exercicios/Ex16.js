function calculadora(param1, op, param2) {
  switch (op) {
    case "+":
      this.calcular = param1 + param2;
      console.log(`A soma de ${param1} ${op} ${param2} é ${this.calcular}`);
      break;
    case "-":
      this.calcular = param1 - param2;
      console.log(
        `A subtração de ${param1} ${op} ${param2} é ${this.calcular}`
      );
      break;
    case "*":
      this.calcular = param1 * param2;
      console.log(
        `A multiplicação de ${param1} ${op} ${param2} é ${this.calcular}`
      );
      break;
    case "/":
      this.calcular = param1 / param2;
      console.log(`A divisão de ${param1} ${op} ${param2} é ${this.calcular}`);
      break;
    default:
      console.log("Operação inválida!");
  }
}

calculadora(2, "+", 2);
calculadora(2, "-", 2);
calculadora(2, "*", 2);
calculadora(2, "/", 2);
calculadora(2, "x", 2);
