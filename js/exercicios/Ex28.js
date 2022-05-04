const numeros = [1, 21, 35, 43, 69, 76, 902, 1234];

function parOuimpar() {
  const self = this;
  this.impares = [];
  this.pares = [];
  this.contarImpares = 0;
  this.contarPares = 0;
  numeros.forEach((numero) => {
    if (numero % 2 == 0) {
      self.contarPares++;
      self.pares.push(numero);
    } else {
      self.contarImpares++;
      self.impares.push(numero);
    }
  });
  console.log(
    `O vetor possui ${self.contarPares} números pares e ${self.contarImpares} números impares.`
  );
  console.log(`Pares: ${self.pares} | Impares: ${self.impares}`);
}

parOuimpar();
