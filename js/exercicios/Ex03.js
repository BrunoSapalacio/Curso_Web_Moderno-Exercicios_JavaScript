function baseExpoente(base, expoente) {
  this.res = base;
  for (var i = 0; i < expoente; i++) {
    this.res = this.res * base;
  }
  console.log(`A base ${base} elevada ao expoente ${expoente} é ${this.res}`);
}

baseExpoente(2, 10);
baseExpoente(2, 5);
baseExpoente(5, 5);
baseExpoente(5, 10);
