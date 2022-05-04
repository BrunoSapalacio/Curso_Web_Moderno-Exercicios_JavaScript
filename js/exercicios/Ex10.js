function verificarNumero(numero) {
  this.numero = numero.toString(); // Converte os numeros em String
  this.numero = this.numero.split(""); // Converte String em Array
  this.somar = 0;
  this.numero.forEach((valor) => {
    this.numeroFormatado = parseFloat(valor);
    this.somar += this.numeroFormatado;
  });
  for (var i = 0; i <= this.somar; ) {
    if (i == this.somar) {
      this.divisel = true;
    } else {
      this.divisel = false;
    }
    i = i + 3;
  }
  if (this.divisel == true) {
    console.log(`O numero ${numero} é divisel por 3, ${this.divisel}`);
  } else {
    console.log(`O numero ${numero} não é divisel por 3, ${this.divisel}`);
  }
  console.log(this.somar);
}

verificarNumero(12321322231326564);
