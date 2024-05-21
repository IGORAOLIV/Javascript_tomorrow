// Obtém os elementos do DOM
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("tasklist");

// Adiciona uma nova tarefa à lista
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const span = document.createElement("span");
    span.setAttribute("id", "taskDate");

    p.textContent = `${taskText}`;
    span.textContent = `${getCurrentDate()}`;

    li.setAttribute("id", "taskList");

    const deleteIcon = document.createElement("img");
    const deleteBtn = document.createElement("button");

    deleteIcon.src =
      "/atividades/projeto_final/assets/icons/delete_24dp_FILL0_wght400_GRAD0_opsz24.svg";
    deleteIcon.alt = "Apagar";

    deleteBtn.appendChild(deleteIcon);

    deleteBtn.addEventListener("click", deleteTask);
    deleteIcon.addEventListener("click", deleteTask);
    li.appendChild(div);
    li.appendChild(deleteBtn);
    div.appendChild(p);
    div.appendChild(span);

    taskList.appendChild(li);
    taskInput.value = "";
    saveTasksToLocalStorage(); // Salva as tarefas após adicionar uma nova
  }
}

function getCurrentDate() {
  const now = new Date();
  let formattedDate = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;
  return formattedDate;
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
  const taskItems = taskList.getElementsByTagName("p");

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
      const div = document.createElement("div");
      const p = document.createElement("p");
      const span = document.createElement("span");
      span.setAttribute("id", "taskDate");

      p.textContent = `${taskText}`;
      span.textContent = `${getCurrentDate()}`;
      li.setAttribute("id", "taskList");

      const deleteIcon = document.createElement("img");
      const deleteBtn = document.createElement("button");

      deleteIcon.src =
        "/atividades/projeto_final/assets/icons/delete_24dp_FILL0_wght400_GRAD0_opsz24.svg";
      deleteIcon.alt = "Apagar";

      deleteBtn.appendChild(deleteIcon);

      deleteBtn.addEventListener("click", deleteTask);
      deleteIcon.addEventListener("click", deleteTask);
      li.appendChild(div);
      li.appendChild(deleteBtn);
      div.appendChild(p);
      div.appendChild(span);

      taskList.appendChild(li);
    });
  }
}

// Carrega as tarefas quando a página é carregada
window.onload = loadTasksFromLocalStorage;
