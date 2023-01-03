
function calculerTVA(prixHT) {
  let TVAEnPourcent = 20;
  let TVA = prixHT * TVAEnPourcent / 100;
  return TVA;
}

let prixChocolatChaudHT = 2;
let prixTartesAuxPommesHT = 5;
let prixCoca = 2;

console.log("TVA : " + calculerTVA(prixChocolatChaudHT) + " €");
console.log("TVA : " + calculerTVA(prixTartesAuxPommesHT) + " €");
console.log("TVA : " + calculerTVA(prixCoca) + " €");