let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push({ text: taskText });
    renderTasks();
    taskInput.value = "";
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    // list all of the task items
    const li = document.createElement("li");
    const completedButton = document.createElement("input");
    completedButton.type = "checkbox";
    completedButton.setAttribute("id", "check-box");
    completedButton.classList.add("completed-button");

    li.setAttribute("id", "tast-text");
    li.classList.add("task-item");
    li.textContent = task.text;

    completedButton.addEventListener("change", () => {
      li.classList.toggle("checked");
    });

    const div = document.createElement("div");
    div.classList.add("task-option");

    div.appendChild(completedButton);

    // remove task item
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "🗑️";

    removeButton.addEventListener("click", () => deleteTask(index));

    div.appendChild(li);
    div.appendChild(removeButton);
    taskList.appendChild(div);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

window.onload = renderTasks;
