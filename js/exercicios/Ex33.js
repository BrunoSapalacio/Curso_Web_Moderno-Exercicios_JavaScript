const vetorInteiro = [1, 2, 3, 4];
const vetorString = ["a", "b", "c", "d"];
const vetorDouble = [10, 20, 30, 40];

const unir1 = vetorInteiro.concat(vetorString, vetorDouble);
console.log(unir1);

const unir2 = vetorString.concat(vetorInteiro + vetorDouble);
console.log(unir2);
