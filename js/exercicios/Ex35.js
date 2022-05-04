const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

const puxar = vetorAdiciona.forEach((vetor) => {
  vetorPilha.push(vetor);
  console.log(vetor);
});

console.log(vetorPilha);
