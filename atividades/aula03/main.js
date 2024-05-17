// crie aqui as variáveis dos objetos ue irá manipular

// funcao de calculo
function calcularIMC() {
  // crie as variáveis peso e altura, obtendo os dados do html
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  // será necessário converter as variáveis?

  // calcule o IMC
  const imc = peso((altura / 100) ** 2);

  // Atribua o resultado do imc à variável do HTML
  document.getElementById("result").value = imc.toFixed(2);
}

// adicione o evento listener
document
  .getElementById("calcularIMCButton")
  .addEventListener("click", calcularIMC);
