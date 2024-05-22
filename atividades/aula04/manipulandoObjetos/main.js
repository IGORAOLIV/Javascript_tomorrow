const botaoAdicionar = document.getElementById("buttonAdicionar");
const botaoConsultar = document.getElementById("buttonConsultar");
const botaoAlterar = document.getElementById("buttonAlterar");
const botaoExcluir = document.getElementById("buttonExcluir");

// Array de objetos para representar várias pessoas
let pessoas = [
    { nome: "João", idade: 30, profissao: "Desenvolvedor" },
    { nome: "Maria", idade: 25, profissao: "Designer" },
    { nome: "Carlos", idade: 35, profissao: "Engenheiro" }
];

// Obtendo elementos HTML para inputs
let nomeInput = document.getElementById('nomeInput');
let idadeInput = document.getElementById('idadeInput');
let profissaoInput = document.getElementById('profissaoInput');
let infoElement = document.getElementById('info');

// Função para adicionar uma nova pessoa ao array
function adicionarPessoa() {
    // Obtendo valores dos inputs
    let novoNome = nomeInput.value;
    let novaIdade = parseInt(idadeInput.value);
    let novaProfissao = profissaoInput.value;

    // Validando se todos os campos foram preenchidos
    if (novoNome && novaIdade && novaProfissao) {
        // Adicionando uma nova pessoa ao array
        pessoas.push({ nome: novoNome, idade: novaIdade, profissao: novaProfissao });

        // Atualizando a exibição na página
        exibirPessoas();

        // Limpando os inputs
        nomeInput.value = '';
        idadeInput.value = '';
        profissaoInput.value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para exibir as pessoas na página
function exibirPessoas() {
    // Limpando o conteúdo anterior
    infoElement.innerHTML = '';

    // Usando um loop for para percorrer todas as pessoas no array
    for (let i = 0; i < pessoas.length; i++) {
        // Criando elementos para exibir as informações sobre cada pessoa
        let pessoaElement = document.createElement('div');

        pessoaElement.innerHTML = "<p>Nome: " + pessoas[i].nome + "</p>";
        pessoaElement.innerHTML += "<p>Idade: " + pessoas[i].idade + "</p>";
        pessoaElement.innerHTML += "<p>Profissão: " + pessoas[i].profissao + "</p>";
        pessoaElement.innerHTML += "<hr>";


        // Adicionando o elemento criado ao elemento pai
        infoElement.appendChild(pessoaElement);
    }
}
// Função para consultar pessoas na página
function consultarPessoa () {

    // let consultaNome = nomeInput.value.trim();
    // let pessoaEncontrada = pessoas.find(pessoas => pessoas.nome === consultaNome); 
    let pessoaEncontrada = consultarNome();

    if (pessoaEncontrada) {
        idadeInput.value = pessoaEncontrada.idade
        profissaoInput.value = pessoaEncontrada.profissao
    } else {
        alert('Pessoa não cadastrada.');
    }
}

function consultarNome() {
    let consultaNome = nomeInput.value.trim();
    let pessoaEncontrada = pessoas.find(pessoas => pessoas.nome === consultaNome);

    return(pessoaEncontrada);
}

function consultarIndiceNome() {
    let consultaNome = nomeInput.value.trim();
    let pessoaIndex = pessoas.findIndex(pessoas => pessoas.nome === consultaNome);

    return(pessoaIndex);
}

function alterarPessoas () {
    // let consultaNome = nomeInput.value.trim();
    // let pessoaIndex = pessoas.findIndex(pessoas => pessoas.nome === consultaNome);
    let pessoaIndex = consultarIndiceNome();

    if (pessoaIndex >= 0) {
        pessoas[pessoaIndex].idade = idadeInput.value;
        pessoas[pessoaIndex].profissao = profissaoInput.value;
        
        exibirPessoas();
    }
    
}

function excluirPessoas () {
    let consultaNome = nomeInput.value;
    let pessoaIndex = pessoas.findIndex(pessoas => pessoas.nome === consultaNome);

    if (pessoaIndex >= 0) {
        pessoas.splice(pessoaIndex, 1);
        
        exibirPessoas();
    }
    
}
// Exibindo as pessoas na página ao carregar
exibirPessoas();

botaoAdicionar.addEventListener("click", adicionarPessoa);
botaoConsultar.addEventListener("click", consultarPessoa);
botaoAlterar.addEventListener("click", alterarPessoas);
botaoExcluir.addEventListener("click", excluirPessoas);