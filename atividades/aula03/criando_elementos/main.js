let newParagrafo = document.createElement("p");

console.log(newParagrafo);

let textoNewParagrafo = document.createTextNode("Não perca a oportunidade");
newParagrafo.appendChild(textoNewParagrafo);
console.log(newParagrafo);

let vBody = document.querySelector("body");
vBody.appendChild(newParagrafo);

let ulElemento = document.getElementById("lista");
let liElemento = document.createElement("li");
liElemento.textContent = "Inclui novo elemento";
liElemento.classList.add("item");
ulElemento.appendChild(liElemento);

let vItemQuery02 = document.querySelectorAll("#lista .item");
console.log(vItemQuery02);

// vamos criar uma nova lista?

let divListas = document.getElementById("grupoListas");

// 01 - crie um novo elemento
let newLista = document.createElement("ul");

// 02 - atribua um id para o elemento criado
newLista.setAttribute("id", "lista03");

// 03 - adicione o elemento filho (ul) ao seu pai (quem é o pai?)

divListas.appendChild(newLista);

// 04 - obtenha/pegue o elemento criado
let ulElementoNewLista = document.getElementById("lista03");

// 05 -crie o elemento filho (li) da lista
let liNewElement = document.createElement("li");

// 06 -altere  o texto do elemento filho  para Econometria
liNewElement.textContent = "Econometria";

// 07 - atribua o filho ao seu pai
newLista.appendChild(liNewElement);
