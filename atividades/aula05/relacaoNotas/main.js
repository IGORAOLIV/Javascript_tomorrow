
const buttonConfirm = document.getElementById("confirm-button"); 
// 01 - obter/pegar o objeto tabela no HTML
//const studentTable = 
const studentTable =document.getElementById("student-table");

buttonConfirm.addEventListener("click", addMatricula);

// Função para adicionar uma nova linha à tabela
function addRow(matricula, nome, nota, faltas, situacao) {
    // tabela: Linhas x Colunas

    // 04 - incluir a linha na tabela
    const newRow = studentTable.insertRow(-1); 
    

    // 05 - incluir as colunas na tabela. Quantas e quais são as colunas?
    const cellMatricula = newRow.insertCell(0); 
    const cellNome = newRow.insertCell(1);
    const cellNota = newRow.insertCell(2);
    const cellFaltas = newRow.insertCell(3);
    const cellSituacao = newRow.insertCell(4);
    // 06 - preencher o conteúdo das células. De onde os valores estão vindo?
    cellMatricula.innerHTML = matricula; 
    cellNome.innerHTML = nome;
    cellNota.innerHTML = nota;
    cellFaltas.innerHTML = faltas;
    cellSituacao.innerHTML = situacao;

  };

function addMatricula(){
    const matricula = document.getElementById("matricula").value;
    
    // 02 - obter/pegar os demais campos. Quais são?
    
    let situacao = "AA";

    // 03 - Determine a situacao do aluno.
        // se a nota for < 7, então reprovado avaliação: situacao = RA
        // se a quantidade de faltas for > 6, então reprovado por faltas: situacao = RF 
    if (nota < 7) {
      situacao = "RA";
    }
    if (faltas > 6) {
      situacao = "RF";
    }
    
    
    // 04 - executar a função que inclui os dados na tabela
    addRow();

  };



