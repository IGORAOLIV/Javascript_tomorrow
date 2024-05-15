//Dado o preço e quantidade de um produto qualquer, calcule seu valor e
//apresente o resultado com até 3 casas decimais.

function calculaValorTotal(preço, quantidade) {
  const valorTotal = preço * quantidade;
  return valorTotal.toFixed(3);
}

const preçoProduto = 5;
const quantidadeProduto = 10;
const resultado = calculaValorTotal(preçoProduto, quantidadeProduto);

console.log(`O valor total do produto é R$${resultado}.`);
