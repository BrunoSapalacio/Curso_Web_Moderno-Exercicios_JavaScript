function Cardapio(codigo, quantidade) {
  switch (codigo) {
    case 100:
      this.valor = quantidade * 3;
      this.produto = "Cachorro Quente";
      calcularValor(quantidade, this.valor, this.produto);
      break;
    case 200:
      this.valor = quantidade * 4;
      this.produto = "Hambúrguer Simples";
      calcularValor(quantidade, this.valor, this.produto);
      break;
    case 300:
      this.valor = quantidade * 5.5;
      this.produto = "Cheeseburguer";
      calcularValor(quantidade, this.valor, this.produto);
      break;
    case 400:
      this.valor = quantidade * 7.5;
      this.produto = "Bauru";
      calcularValor(quantidade, this.valor, this.produto);
      break;
    case 500:
      this.valor = quantidade * 3.5;
      this.produto = "Refrigerante";
      calcularValor(quantidade, this.valor, this.produto);
      break;
    case 600:
      this.valor = quantidade * 2.8;
      this.produto = "Suco";
      calcularValor(quantidade, this.valor, this.produto);
      break;
    default:
      console.log("[ERRO]: Produto não existente!");
  }
}

let calcularValor = (quantidade, valor, produto) => {
  this.valor = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
  console.log(`[Lanchonete]: ${quantidade} ${produto} custa ${this.valor}`);
};

Cardapio(100, 3);
Cardapio(200, 4);
Cardapio(300, 5);
Cardapio(400, 6);
Cardapio(500, 7);
Cardapio(600, 8);
Cardapio(700, 8);
