const tasksForm = document.querySelector(".tasks__control");
const tasksList = document.getElementById("tasks__list");
const tasksInput = document.getElementById("task__input");

function addTask() {
  if (tasksInput.value.trim() != "") {
    let task = document.createElement("div");
    task.classList.add("task");
  
    const html = 
      `<div class="task__title">
         ${tasksInput.value.trim()}
       </div>
    <a href="#" class="task__remove">&times;</a>`;
    task.insertAdjacentHTML("afterBegin", html);
    tasksList.appendChild(task);
    task.querySelector("a.task__remove").addEventListener("click", deleteTask);
    event.preventDefault();
    tasksInput.value ="";
  }
}

function deleteTask() {
  this.closest("div.task").remove();
  event.preventDefault();
}

tasksForm.addEventListener("submit", addTask);