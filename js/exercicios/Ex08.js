const pontuacao = [10, 20, 25, 8, 25, 3, 0, 30, 1];

function jogos() {
  let num = 0;
  let recordes = 0;
  let pos = "";
  pontuacao.forEach((jogos) => {
    num++;
    console.log(`Jogo ${num}: pontuação ${jogos}`);
    if (pontuacao[1] <= jogos && pontuacao.indexOf(jogos) > 1) {
      recordes++;
      pos += "jogo " + num + " ";
    }
  });
  let min = Math.min(...pontuacao);
  let pos1 = pontuacao.indexOf(min) + 1;
  console.log("");
  console.log(`Pontuação minima: jogo ${pos1}, ${min} pontos`);
  console.log(`Recordes batidos: ${recordes}, ${pos}`);
}

jogos(pontuacao);
