function dinheiro(valor) {
  this.valor = valor.toFixed(2);
  const valorFormatado = this.valor.replace(".", ",");
  console.log(`R$ ${valorFormatado}`);
}

dinheiro(0.30000000);
dinheiro(0.15400000);
dinheiro(0.45400000);
dinheiro(0.99400000);
