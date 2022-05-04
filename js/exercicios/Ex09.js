function notas(nota) {
  this.nota = nota.toString(); // Converte os numeros em String
  this.nota = this.nota.split(""); // Converte String em Array
  if (nota < 38) {
    console.log("Aluno reprovado!");
  } else {
    if (this.nota[1] >= 3 && this.nota[1] < 5) {
      this.nota[1] = 5;
      this.nota = this.nota.join("");
      console.log(`Aluno aprovado! Sua nota de ${nota} foi arrendodado para ${this.nota}`);
    } else if (this.nota[1] >= 8 && this.nota[1] <= 9) {
      this.nota[0] = parseFloat(this.nota[0]) + 1;
      this.nota[1] = 0;
      this.nota = this.nota.join(""); // Converte Array em String
      console.log(`Aluno aprovado! Sua nota de ${nota} foi arrendodado para ${this.nota}`);
    } else {
      this.nota = this.nota.join("");
      console.log(`Aluno aprovado! Sua nota foi ${this.nota}`);
    }
  }
}

notas(44);
notas(100);
notas(99);
