function crescimento(altura1, taxa1, altura2, taxa2) {
  this.idade = 8;
  let check = false;
  if (altura1 > altura2) {
    this.criancaMenor = altura2;
    this.criancaMenorTaxa = taxa2;
    this.criancaMaior = altura1;
    this.criancaMaiorTaxa = taxa1;
  } else {
    this.criancaMenor = altura1;
    this.criancaMenorTaxa = taxa1;
    this.criancaMaior = altura2;
    this.criancaMaiorTaxa = taxa2;
  }
  for (let i = 0; i < 10; i++) {
    this.idade++;
    this.criancaMenor = this.criancaMenor + this.criancaMenorTaxa;
    this.criancaMaior = this.criancaMaior + this.criancaMaiorTaxa;
    if (this.criancaMenor > this.criancaMaior && check == false) {
      this.mensagem1 = `A criança menor ultrapassou a altura da criança maior com ${this.idade} anos`;
      check = true;
    }
  }
  if (this.criancaMenor < this.criancaMaior) {
    this.mensagem1 =
      "A criança menor não ultrapassou a altura da criança maior";
  }
  console.log(this.mensagem1);
  console.log(`Altura final com 18 anos:`);
  console.log(`Criança menor: ${this.criancaMenor.toFixed(2)}`);
  console.log(`Criança maior: ${this.criancaMaior.toFixed(2)}`);
}

crescimento(1, 0.06, 1.2, 0.03);