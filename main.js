// Exercice 2 : Réalisation d'un programme permettant de saisir la puissance de 2 que l'on souhaite
// Ne pas oublié de verifier avec la commande "node main.js" dans le terminal
// Installation du module readlin-sync permettant de réaliser des saissie au clavier


var readline = require("readline-sync"); // On recupere le module que l'on place dans la variable readline

const PUISSANCE = 2 // On crée une constant et lui met la valeur 2 ou autre

var saisie = parseInt(readline.question("Puissance voulue ? ")); // Pour convertir notre chaine de caratère par de l'entier avec parseInt()


console.log(saisie + " à la puissance " + saisie + " = " + Math.pow(PUISSANCE,saisie)); // Affichage du resultat