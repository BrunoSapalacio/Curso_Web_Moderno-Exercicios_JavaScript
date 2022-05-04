const numeros = [1, 5, 6, 10, 14, 19, 56, 23, 20, 56];

function contarNumeros() {
  this.contador = 0;
  this.contar = false;
  this.numeros = [];
  numeros.forEach((valor) => {
    if (valor === 10) {
      this.contar = true;
      return;
    } else if (valor === 20) {
      this.contar = false;
      return;
    } else if (this.contar === true) {
      this.numeros.push(valor);
      this.contador++;
    }
  });
  console.log(`Tem ${this.contador} números no intervalo [10,20]`);
  console.log(`Números: ${this.numeros}`);
}

contarNumeros();