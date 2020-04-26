var Formulaire = document.getElementsByClassName("formulaire");
var panier = document.getElementById("panier");

function calculTotalPrix() {
  let panierTotal = 0;
  for (let i = 0; i < Formulaire.length; i++) {
    var total =
      Formulaire[i].elements["prix"].value *
      Formulaire[i].elements["quantité"].value;
    Formulaire[i].elements["total"].value = total;

    panierTotal += total;
  }
  panier.value = panierTotal;
}
