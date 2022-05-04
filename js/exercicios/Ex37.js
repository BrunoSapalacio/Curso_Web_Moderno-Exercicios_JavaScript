function progressaoAritmetica(n, a1, r) {
  let resultado = [];
  let num = 1;
  let check = false;
  this.termo = a1;
  for (let i = 0; i < n; i++) {
    if (this.termo == a1 && check == false) {
      console.log(`A${num} = ${a1}`);
      resultado.push(this.termo);
      check = true;
    } else {
      this.termo = this.termo + r;
      this.resultado = this.termo + r;
      num++;
      resultado.push(this.termo);
      console.log(`A${num} = ${this.termo} + ${r} = ${this.resultado}`);
    }
  }
  console.log(resultado);
}

function progressaoGeometrica(n, a1, r) {
  let resultado = [];
  let num = 0;
  let check = false;
  this.termo = a1;
  for (let i = 0; i < n; i++) {
    if (this.termo == a1 && check == false) {
      this.resultado = a1 * r;
      num++;
      console.log(`G${num} = ${a1} * ${r} = ${this.resultado}`);
      resultado.push(this.resultado);
      check = true;
    } else {
      this.termo = this.termo * r;
      this.resultado = this.termo * r;
      num++;
      resultado.push(this.resultado);
      console.log(`G${num} = ${this.termo} * ${r} = ${this.resultado}`);
    }
  }
  console.log(resultado);
}

progressaoAritmetica(8, 4, 2);
progressaoGeometrica(8, 2, 2);
