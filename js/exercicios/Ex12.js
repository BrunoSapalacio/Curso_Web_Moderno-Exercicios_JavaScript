function fatorial(numero) {
  this.numero = numero;
  this.resultado = numero;
  for (let i = 1; i < numero; i++) {
    this.resultado = this.resultado * (this.numero - 1);
    this.numero--;
  }
  console.log(`O fatorial de ${numero} é ${this.resultado}`);
}

fatorial(5);
