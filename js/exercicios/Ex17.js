function aumento(plano, salario) {
  switch (plano) {
    case "A":
      this.aumentoSalario = salario + (salario / 100) * 10;
      console.log("O funcionario recebeu um aumento de 10%");
      console.log(`Salário antigo: ${salario}, salário novo: ${this.aumentoSalario}`);
      break;
    case "B":
      this.aumentoSalario = salario + (salario / 100) * 15;
      console.log("O funcionario recebeu um aumento de 15%");
      console.log(`Salário antigo: ${salario}, salário novo: ${this.aumentoSalario}`);
      break;
    case "C":
      this.aumentoSalario = salario + (salario / 100) * 20;
      console.log("O funcionario recebeu um aumento de 20%");
      console.log(`Salário antigo: ${salario}, salário novo: ${this.aumentoSalario}`);
      break;
    default:
      console.log("Plano inválido!");
  }
}

aumento("A", 1200);
aumento("B", 1200);
aumento("C", 1200);
aumento("D", 1200);
