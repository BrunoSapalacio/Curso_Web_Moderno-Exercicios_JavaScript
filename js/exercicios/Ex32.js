const valores = [5, 66, 43, 86, 49, 33];

const media = () => {
  this.contador = 0;
  let calcular = valores.reduce((total, valorAtual, numeros) => {
    this.contador = numeros + 1;
    return (total += valorAtual);
  }, 0);
  console.log(`A média dos valores(${valores}) é ${calcular / this.contador}`);
};

media();
