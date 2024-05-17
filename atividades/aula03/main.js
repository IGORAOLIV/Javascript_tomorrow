// crie aqui as variáveis dos objetos ue irá manipular
let peso = 0;
let altura = 0;

// funcao de calculo
function calcularIMC(peso, altura) {
  // crie as variáveis peso e altura, obtendo os dados do html
  peso = parseFloat(document.getElementById("peso").value);
  altura = parseFloat(document.getElementById("altura").value);

  // será necessário converter as variáveis?

  // calcule o IMC
  let imc = peso/((altura / 100) ** 2);

  // Atribua o resultado do imc à variável do HTML
  document.getElementById("result").value = imc.toFixed(2);
}

// adicione o evento listener
document.getElementById("calcularIMCButton").addEventListener("click", calcularIMC);
