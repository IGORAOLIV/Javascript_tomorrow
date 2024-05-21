// Obtém os elementos do DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("tasklist");

// Adiciona uma nova tarefa à lista
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    li.setAttribute("id", "taskList");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML =
      '<img src="/atividades/projeto_final/assets/icons/delete_24dp_FILL0_wght400_GRAD0_opsz24.svg">';
    deleteBtn.addEventListener("click", deleteTask);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";
    saveTasksToLocalStorage(); // Salva as tarefas após adicionar uma nova
  }
}

// Deleta uma tarefa da lista
function deleteTask(event) {
  const task = event.target.parentElement;
  taskList.removeChild(task);
  saveTasksToLocalStorage(); // Salva as tarefas após deletar uma
}

// Salva as tarefas no LocalStorage
function saveTasksToLocalStorage() {
  const tasks = [];
  const taskItems = taskList.getElementsByTagName("li");

  for (let i = 0; i < taskItems.length; i++) {
    tasks.push(taskItems[i].textContent.replace("Delete", "").trim()); // Remove o texto do botão "Delete"
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Carrega as tarefas do LocalStorage
function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach((taskText) => {
      const li = document.createElement("li");
      li.textContent = taskText;
      li.setAttribute("id", "taskList");

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteTask);
      li.appendChild(deleteBtn);

      taskList.appendChild(li);
    });
  }
}

// Carrega as tarefas quando a página é carregada
window.onload = loadTasksFromLocalStorage;
