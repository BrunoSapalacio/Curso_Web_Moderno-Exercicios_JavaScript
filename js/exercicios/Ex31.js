const valores = [-1, -24, -422, 4211, 65, 22, 164];

function numerosNegativos() {
  this.contador = 0;
  this.negativo = [];
  valores.forEach((valor) => {
    if (valor < 0) {
      this.contador++;
      this.negativo.push(valor);
    }
  });
  console.log(
    `Vetor (${valores}) possui ${this.contador} número(s) negativo(s)`
  );
  console.log(`Números negativo: ${this.negativo}`);
}

numerosNegativos();
