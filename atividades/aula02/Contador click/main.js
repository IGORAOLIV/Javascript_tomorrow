const buttonInc = document.getElementById("incrementButton");
const countShow = document.getElementById("counter");
const buttonDec = document.getElementById("decrementButton");
const buttonZer = document.getElementById("resetButton");

let contador = 0;

function incrementarContador() {
    contador++;
    countShow.innerHTML = contador;    
}

function decrementarContador() {
    contador--;
    countShow.innerHTML = contador;    
}

function zerarContador() {
    contador = 0;
    countShow.innerHTML = contador;    
}

buttonInc.addEventListener("click", incrementarContador);
buttonDec.addEventListener("click", decrementarContador);
buttonZer.addEventListener("click", zerarContador);


