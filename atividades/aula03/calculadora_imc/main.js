// crie aqui as variáveis dos objetos ue irá manipular
const buttonCalIMC = document.getElementById("calcularIMCButton");
const resultIMC = document.getElementById("result");
const faixasIMC = document.querySelectorAll(".faixa");

// funcao de calculo
function calcularIMC() {
  // crie as variáveis peso e altura, obtendo os dados do html
  let nPeso = parseFloat(document.getElementById("peso").value);
  let nAltura = parseFloat(document.getElementById("altura").value);

  // calcule o IMC
  let imc = nPeso / (nAltura / 100) ** 2;

  // Atribua o resultado do imc à variável do HTML
  resultIMC.value = imc.toFixed(2);

  // Limpa as cores da classificação
  for (let i = 0; i < faixasIMC.length; i++) {
    faixasIMC[i].style.background = "none";
  }

  // Modifica as cores de acordo com a classificação

  if (imc < 18.5) {
    document.querySelector(".level1").style.background = "#FF5733";
  } else if (imc >= 18.5 && imc < 25) {
    document.querySelector(".level2").style.background = "#4caf50";
  } else if (imc >= 25 && imc < 30) {
    document.querySelector(".level3").style.background = "#fce311";
  } else if (imc >= 30 && imc < 35) {
    document.querySelector(".level4").style.background = "#FF5733";
  } else if (imc >= 35 && imc < 40) {
    document.querySelector(".level5").style.background = "#FF5733";
  } else {
    document.querySelector(".level6").style.background = "#FF5733";
  }
}

// adicione o evento listener
calcularIMCButton.addEventListener("click", calcularIMC);
