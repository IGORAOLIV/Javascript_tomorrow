// Dado um nome de aluno e suas quatro notas, calcule e apresente a sua média final. Considere duas casas decimais. A resposta deve ser: A média do aluno <nome> é <média>.

function calculaMediaFinal(nota1, nota2, nota3, nota4) {
  const somaNotas = nota1 + nota2 + nota3 + nota4;
  const media = somaNotas / 4;
  return media.toFixed(2);
}

const nomeAluno = "Igor";
const nota1 = 8.5;
const nota2 = 7.0;
const nota3 = 9.2;
const nota4 = 6.8;

const mediaFinal = calculaMediaFinal(nota1, nota2, nota3, nota4);
console.log(`A média do aluno ${nomeAluno} é ${mediaFinal}.`);
