const taskInput = document.getElementById("taskInput");
const taskLisp = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.ariaValueMax.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function deleteTask(event) {
  const task = event.target.parentElement;
  taskList.removeChild(task);
}

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.addEventListener("click", deleteTask);
li.appendChild(deleteBtn);

function addTask() {
  saveTasksTolocalStorage();
}

function saveTasksTolocalStorage() {
  const tasks = [];
  const taskItems = taskList.getElementsByTagName("li");
}

for (let i = 0; i < taskItems.lenght; i++) {
  tasks.push(tasksItems[i].textContext);
}

localStorage.setItem("tasks", JSON.stringify(tasks));

function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localSrorage.getItem("tasks"));
  if (tasks) {
    tasks.froEach((taskText) => {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.addEventListener("click", completeTask);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", deleteTask);
      li.appendChild(deleteBtn);
    });
  }
}

loadTasksFromLocalStorage;
