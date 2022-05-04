function Bhaskara(ax2, bx, c) {
  this.resultado = 4 * (ax2 * c);
  this.resultado = bx * bx - this.resultado;
  if (this.resultado < 0) {
    console.log(`Delta ${this.resultado} é negativo`);
  } else {
    this.b = bx * -1;
    this.a = 2 * ax2;
    this.raiz = Math.sqrt(this.resultado);
    this.xi = (this.b + this.raiz) / 6;
    this.xii = (this.b - this.raiz) / 6;
    console.log(`Delta ${this.resultado} é positivo`);
    console.log(`Valor de XI é ${this.xi}`);
    console.log(`Valor de XII é ${this.xii}`);
  }
}

Bhaskara(2, 39, 4);
