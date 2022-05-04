function impares(inicio, fim) {
  if (inicio === undefined) {
    inicio = 0;
  }
  if (fim === undefined) {
    fim = 100;
  }
  if (inicio < fim) {
    this.impar = inicio + 1;
    for (let i = 0; this.impar < fim - 1; i++) {
      this.impar = +this.impar + 2;
      console.log(this.impar);
    }
  } else {
    this.impar = inicio + 1;
    console.log(this.impar);
    for (let i = 0; this.impar > fim + 1; i++) {
      this.impar = +this.impar - 2;
      console.log(this.impar);
    }
  }
}

impares(100, 0);
impares();
