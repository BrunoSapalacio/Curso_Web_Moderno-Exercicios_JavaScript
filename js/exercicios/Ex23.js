function mediaAluno(codigo, nota1, nota2, nota3) {
  let num = 0;
  let notaFormatada = [];
  this.notas = nota1.toString() + nota2.toString() + nota3.toString();
  this.notas = this.notas.split("");
  this.notaMaior = Math.max(...this.notas);
  this.notas.forEach((nota) => {
    if (nota == this.notaMaior) {
      notaFormatada[num] = nota * 4;
      num++;
    } else {
      notaFormatada[num] = nota * 3;
      num++;
    }
  });
  let media = notaFormatada.reduce((total, numero) => total + numero, 0); //  Soma os numeros da array
  console.log(`Codigo do aluno: ${codigo}`)
  console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`)
  console.log(`Média: ${media / 10}, ${media < 5 ? 'Reprovado' : 'Aprovado'}`)
}

mediaAluno(5, 2, 9, 4);
