window.onload = init;
var divResult;
var divTexte;
function init() {
  divResult = document.getElementsByTagName("div")[1];
  divTexte = document.getElementsByTagName("div")[2];
  for (var k in animaux) {
    divResult.innerHTML +=
      "<img id='" +
      animaux[k].name +
      "' src='images/" +
      animaux[k].file +
      "'/>";
  }

  //----------------------------------------------------------------------------
  //But : En cliquant sur l’image survolée, elle doit disparaître

  //Déclaration du tableau contenant les images de divResult
  var imgArray = divResult.childNodes;

  //On parcourt le tableau contenant les images
  imgArray.forEach((img) => {
    //On ajoute un évenement click qui va apeller la méthode qui va faire disparaitre l'element
    img.addEventListener("click", function () {
      MakeDisappear(this);
    });
  });

  //----------------------------------------------------------------------------
  //But : En cliquant sur le Bouton 1, tous les animaux domestiques disparaissent

  //On récupère le Bouton 1
  var button1 = $("div:nth-of-type(1) button:nth-of-type(1)");

  //On créé un événement click sur le bouton 1
  button1.click(function () {
    //On parcout le Json "animaux"
    animaux.forEach((animal) => {
      //On cherche les animaux avec la propriété 'domestic' à true
      if (animal.domestic == true) {
        //on fait disparaitre chaque image qui a pour id le nom des animaux précédemment sélectionnés
        MakeDisappear(document.querySelector("#" + animal.name));
      }
    });
  });

  //----------------------------------------------------------------------------
  //But : En cliquant sur le Bouton 2, toutes les images réapparaissent

  //On récupère le Bouton 2
  var button2 = $("div:nth-of-type(1) button:nth-of-type(2)");

  //On créé un événement click sur le bouton 2
  button2.click(function () {
    //on fait apparaitre toutes les images déjà stockées dans le tableau "imgArray"
    imgArray.forEach((img) => {
      MakeAppear(img);
    });
  });

  //----------------------------------------------------------------------------
}
//Méthodes

//Fait disparaitre un élément passé en paramètre
function MakeDisappear(elt) {
  elt.style.display = "none";
}

//Fait apparaitre un élément passé en paramètre
function MakeAppear(elt) {
  elt.style.display = "inline";
}
