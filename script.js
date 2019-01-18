// Exercice 1.1
function displayInterface() {

  let title = document.createElement("h1");
  title.innerHTML = "Cinéma Le Dauphin";

  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, desrencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi)."

  let button = document.createElement("button");
  button.innerHTML = "Voir les films à l'affiche cette semaine";

  document.body.appendChild(title);
  document.body.appendChild(paragraph);
  document.body.appendChild(button);

  // 1.4
  button.addEventListener("click", function() {

    title.style.display = "none";
    paragraph.style.display = "none";
    button.style.display = "none";


    document.body.appendChild(createHTMLTable(films));
  }, false);
}

displayInterface();

// 1.2

let films = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", 2019, "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", 2018, "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", 2018, "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", 2018, "1h06", "vostfr"]
];


// 1.3

function createHTMLTable(array) {
  let table = document.createElement("table");

  let i = 0,
    j;
  let currentElementI, currentElementJ;


  let thead = document.createElement("thead");

  let tr = document.createElement("tr");

  while (i < array[0].length) {
    currentElementI = array[0][i];
    i++;


    let th = document.createElement("th");
    th.innerHTML = currentElementI;
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  table.appendChild(thead);



  let tbody = document.createElement("tbody");
  i = 1;

  while (i < array.length) {
    currentElementI = array[i];
    i++;

    let tr = document.createElement("tr");
    j = 0;

    while (j < currentElementI.length) {
      currentElementJ = currentElementI[j];
      j++;

      let td = document.createElement("td");
      td.innerHTML = currentElementJ;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  return table;
}

// Exercice 2.1

let substancesInformations = [
  ["SUBSTANCES", "Température de fusion ou solidication en °C", "Température d'ébullition en °C"],
  ["acide acétique", 17, 118],
  ["acide nitrique", -41, 86],
  ["acide sulfurique", 10, 290],
  ["alcool éthylique", -114, 78],
  ["aluminium", 660, 2450]
];

// 2.2
function returnSubtances(array, temperature) {
  let substancesArray = [];

  let i = 1;
  let currentElement;

  while (i < array.length) {
    currentElement = array[i];
    i++;

    if (currentElement[2] < temperature) {
      substancesArray.push(currentElement[0]);
    }
  }

  return substancesArray;
}
