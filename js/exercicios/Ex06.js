function jurosSimples(capital, juros, meses) {
  juros = juros / 100;
  this.jurosSimples = capital * juros * meses;
  const jurosFormatado = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(this.jurosSimples);
  this.capital = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(capital);
  console.log(`O juros simples de ${this.capital} é ${jurosFormatado}`);
}

function jurosCompostos(capital, juros, meses) {
  this.capital = capital;
  for (let i = 0; i < meses; i++) {
    this.resultado = (this.capital / 100) * juros;
    this.capital = this.capital + this.resultado;
  }
  this.capital = this.capital.toFixed(2) - capital;
  const jurosFormatado = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(this.capital);
  this.capital = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(capital);
  console.log(`O juros compostos de ${this.capital} é ${jurosFormatado}`);
}

jurosSimples(10000, 1, 12);
jurosCompostos(10000, 1, 5);
