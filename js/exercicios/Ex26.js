(function () {
  this.pares = 0;
  console.log("Exibindo pares entre 1 e 100");
  for (let i = 0; i < 50; i++) {
    this.pares = +this.pares + 2;
    console.log(this.pares);
  }
})();
