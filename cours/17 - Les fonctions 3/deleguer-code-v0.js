
function calculerTVA(prixHT) {
  let TVAEnPourcent = 20;
  let TVA = prixHT * TVAEnPourcent / 100;
  console.log("TVA : " + TVA + " €");
}

let prixChocolatChaudHT = 2;
let prixTartesAuxPommesHT = 5;
let prixCoca = 2;

calculerTVA(prixChocolatChaudHT);
calculerTVA(prixTartesAuxPommesHT);
calculerTVA(prixCoca);