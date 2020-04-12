var Formulaire = document.getElementsByClassName("formulaire")[0];

function calculTotalPrix() {
  let panier = 0;
  for (let i = 0; i < Formulaire.length; i++) {
    var total =
      document.getElementsByClassName("formulaire")[i].elements["prix"].value *
      document.getElementsByClassName("formulaire")[i].elements["quantité"]
        .value;
    document.getElementsByClassName("formulaire")[i].elements[
      "total"
    ].value = total;
    /*
    panier += total;
    alert("Prix total " + panier);
    */
  }
}
