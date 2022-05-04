const comparar = (string1, string2) => {
  let iguais = false;
  if (string1 === string2) {
    iguais = true;
    return console.log(iguais);
  } else {
    iguais = false;
    return console.log(iguais);
  }
};

comparar("ola", "OLA");
