function anuidade(mes, valor) {
  switch (mes) {
    case 1:
      this.mes = "Janeiro";
      this.valor = valor;
      break;
    case 2:
      this.mes = "Fevereiro";
      this.valor = valor;
      break;
    case 3:
      this.mes = "Março";
      this.valor = valor;
      break;
    case 4:
      this.mes = "Abril";
      this.valor = valor;
      break;
    case 5:
      this.mes = "Maio";
      this.valor = valor;
      break;
    case 6:
      this.mes = "Junho";
      this.valor = valor;
      break;
    case 7:
      this.mes = "Julho";
      this.valor = valor;
      break;
    case 8:
      this.mes = "Agosto";
      this.valor = valor;
      break;
    case 9:
      this.mes = "Setembro";
      this.valor = valor;
      break;
    case 10:
      this.mes = "Outubro";
      this.valor = valor;
      break;
    case 11:
      this.mes = "Novembro";
      this.valor = valor;
      break;
    case 12:
      this.mes = "Dezembro";
      this.valor = valor;
      break;
    default:
      console.log("[ERRO]: mês invalido!");
      break;
  }
  if (mes == 1) {
    console.log(`Mês de pagamento: ${this.mes}`);
    console.log(
      `Valor a ser pago: ${this.valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}`
    );
  } else if (mes <= 12) {
    for (let i = 0; i < mes; i++) {
      this.resultado = (this.valor / 100) * 5;
      this.valor = this.valor + this.resultado;
    }
    console.log(`Mês de pagamento: ${this.mes}`);
    console.log(
      `Valor a ser pago: ${this.valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}, aumento de ${5 * (mes - 1)}%`
    );
  }
}

anuidade(1, 150);
anuidade(2, 150);
anuidade(3, 150);
anuidade(4, 150);
anuidade(5, 150);
anuidade(6, 150);
anuidade(7, 150);
anuidade(8, 150);
anuidade(9, 150);
anuidade(10, 150);
anuidade(11, 150);
anuidade(12, 150);
anuidade(13, 150);
