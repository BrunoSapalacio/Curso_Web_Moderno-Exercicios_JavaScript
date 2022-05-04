const vetorA = [1, 2, 3, 4, 5];
const vetorB = [10, 20, 30, 40, 50];

function trocarVetores() {
  for (let i = 0; i < 5; i++) {
    vetorB.push(vetorA[0]);
    vetorA.push(vetorB[0]);
    vetorB.splice(0, 1);
    vetorA.splice(0, 1);
  }
  console.log(vetorA);
  console.log(vetorB);
}

trocarVetores();
