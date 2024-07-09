let btn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let inputTask = document.getElementById("newTask");

function onClickCreateTask() {
  if (inputTask.value != "") {
    let listElement = document.createElement("li");
    let spanElement = document.createElement("span");
    spanElement.textContent = inputTask.value;

    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    completeBtn.addEventListener("click", onClickCompleted);
    let deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.addEventListener("click", onClickDelete);

    taskList.appendChild(listElement);
    listElement.appendChild(spanElement);
    listElement.appendChild(completeBtn);
    listElement.appendChild(deleteBtn);
  } else {
    let errorMassage = document.getElementById("errorMassage");
    errorMassage.textContent = "Enter your Task";
  }
  inputTask.value = "";
}

btn = addEventListener("click", onClickCreateTask);

function onClickCompleted(event) {
  let listElement = event.target.closest("li");

  listElement.classList.toggle("completed");
}

function onClickDelete(event) {
  let element = event.target.closest("li");
  element.remove(element);
}
