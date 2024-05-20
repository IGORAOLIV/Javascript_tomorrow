const botaoIncluir = document.getElementById("botaoIncluir");


// Array para armazenar os elementos
let myArray = [];

// Função para incluir um elemento no array
function addElement() {
    const elementInput = document.getElementById('elementInput');
    const elementValue = elementInput.value.trim();

    if (elementValue !== '') {
        myArray.push(elementValue);
        updateList();
        elementInput.value = '';
    }
}

// Função para atualizar a lista de elementos na página
function updateList() {
    const arrayList = document.getElementById('arrayList');
    arrayList.innerHTML = '';

    myArray.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;

        arrayList.appendChild(li);
    });
}



botaoIncluir.addEventListener("click", addElement);
