const notas = [2, 6, 7, 9];

function nota() {
  notas.forEach((valor) => {
    if (valor < 5) {
      this.conceito = "D";
    } else if (valor >= 5 && valor < 7) {
      this.conceito = "C";
    } else if (valor >= 7 && valor < 9) {
      this.conceito = "B";
    } else if (valor >= 9 && valor <= 10) {
      this.conceito = "A";
    }
    console.log(`Nota ${valor}, conceito ${this.conceito}`);
  });
}

nota();
