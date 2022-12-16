/* Mini projet : valider un rendez-vous */

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;

// Durée du RDV : 15 minutes
let duree = 20;

// ETAPE 1 : Calcul de la fin du RDV
let finRdvMinutes = debutRdvMinutes + duree;
let finRdvHeures = debutRdvHeures;

//Correction des problèmes des minutes
while (finRdvMinutes >= 60) {
  finRdvMinutes = finRdvMinutes - 60;
  finRdvHeures++;
}
//Correction problème des minutes avant 10
if (finRdvMinutes < 10) {
  finRdvMinutes = "0" + finRdvMinutes;
}

// ETAPE 2 : Est-ce que la fin du RDV est avant la fin de la journée ?
if ((finRdvHeures < finJourneeHeures) ||
  (finRdvHeures === finJourneeHeures && finRdvMinutes < finJourneeMinutes)) {
  console.log("RDV OK");
} else {
  console.log("RDV impossible");
}

// ETAPE 3 : Affichage de l'heure de fin du RDV
console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
