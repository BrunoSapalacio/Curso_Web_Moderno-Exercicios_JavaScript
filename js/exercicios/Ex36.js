const vetor1 = [1, 45, 33, 67, 54];
const vetor2 = [55, 23, 3, 4, 11];

function multiplica(param1) {
  let vetorRes = [];
  vetor1.forEach((vetor) => {
    this.resultado = vetor * param1;
    vetorRes.push(this.resultado);
    console.log(vetor, " x ", param1, " = ", this.resultado);
  });
  console.log(vetorRes);
}

function multiplica2(param1) {
  let vetorRes = [];
  vetor2.forEach((vetor) => {
    if (vetor > 5) {
      this.resultado = vetor * param1;
      vetorRes.push(this.resultado);
      console.log(vetor, " x ", param1, " = ", this.resultado);
    }
  });
  console.log(vetorRes);
}

multiplica(5);
multiplica2(4);
