const valores = [10, 23, 435, 43, 356, 3445, 8];

function maiorEMenor() {
  this.maior = Math.max(...valores);
  this.menor = Math.min(...valores);
  console.log(`Valores: ${valores}`);
  console.log(`Valor maior: ${this.maior}`);
  console.log(`Valor menor: ${this.menor}`);
}

maiorEMenor();
