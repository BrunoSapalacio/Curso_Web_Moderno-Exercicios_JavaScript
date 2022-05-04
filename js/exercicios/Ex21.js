function planoDeSaude(idade) {
  this.valor = 100;
  if (idade < 10) {
    this.valor = this.valor + 80;
    this.adicional = 80;
  } else if (idade >= 10 && idade <= 30) {
    this.valor = this.valor + 50;
    this.adicional = 50;
  } else if (idade > 30 && idade <= 60) {
    this.valor = this.valor + 95;
    this.adicional = 95;
  } else if (idade > 60) {
    this.valor = this.valor + 130;
    this.adicional = 130;
  }
  console.log(
    `O seu plano de saúde ficou em R$ ${this.valor},00 (R$ 100,00 + R$ ${this.adicional},00 adicional)`
  );
}

planoDeSaude(8);
planoDeSaude(30);
planoDeSaude(50);
planoDeSaude(65);
