function anoBissexto(ano) {
  this.divisivel4 = ano / 4;
  if (Number.isInteger(this.divisivel4) == true) {
    console.log(`O ano ${ano} é bissexto`);
  } else {
    console.log(`O ano ${ano} não é bissexto`);
  }
}

anoBissexto(200);
