function diaUtil(dia) {
  switch (dia) {
    case 1:
      console.log(`dia ${dia} é domingo, fim de semana`);
      break;
    case 2:
      console.log(`dia ${dia} é segunda-feira, dia útil`);
      break;
    case 3:
      console.log(`dia ${dia} é terça-feira, dia útil`);
      break;
    case 4:
      console.log(`dia ${dia} é quarta-feira, dia útil`);
      break;
    case 5:
      console.log(`dia ${dia} é quinta-feira, dia útil`);
      break;
    case 6:
      console.log(`dia ${dia} é sexta-feira, dia útil`);
      break;
    case 7:
      console.log(`dia ${dia} é sábado, fim de semana`);
      break;
    default:
      console.log(`dia ${dia} é inválido`);
  }
}

diaUtil(1);
