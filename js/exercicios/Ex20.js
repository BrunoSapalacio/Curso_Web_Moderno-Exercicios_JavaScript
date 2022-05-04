function cedulas(valor) {
  let notas = [];
  let cont = [0, 0, 0, 0, 0];
  console.log(`Valor total: R$ ${valor},00`);
  for (var i = 0; valor > 0; i++) {
    if (valor >= 100) {
      valor = valor - 100;
      notas.push(100);
      cont[0] = cont[0] + 1;
    } else if (valor >= 50) {
      valor = valor - 50;
      notas.push(50);
      cont[1] = cont[1] + 1;
    } else if (valor >= 10) {
      valor = valor - 10;
      notas.push(10);
      cont[2] = cont[2] + 1;
    } else if (valor >= 5) {
      valor = valor - 5;
      notas.push(5);
      cont[3] = cont[3] + 1;
    } else if (valor > 0) {
      valor = valor - 1;
      notas.push(1);
      cont[4] = cont[4] + 1;
    }
  }
  let notasFormatada = [...new Set(notas)];
  console.log("Cédulas usadas:");
  notasFormatada.forEach((nota) => {
    this.nota = nota.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    switch (nota) {
      case 100:
        console.log(`${cont[0]} nota(s) de ${this.nota}`);
        break;
      case 50:
        console.log(`${cont[1]} nota(s) de ${this.nota}`);
        break;
      case 10:
        console.log(`${cont[2]} nota(s) de ${this.nota}`);
        break;
      case 5:
        console.log(`${cont[3]} nota(s) de ${this.nota}`);
        break;
      case 1:
        console.log(`${cont[4]} nota(s) de ${this.nota}`);
        break;
    }
  });
}

cedulas(18);
