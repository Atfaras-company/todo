const ul = document.querySelector("ul.todoList");
const input = document.getElementById("todo");
let itemsArray = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

itemsArray.forEach(addTask);
function addTask(text) {
  const li = document.createElement("li");
  li.innerHTML =
    text +
    '<div id="icons"> <i id="edit" class="fa-solid fa-pen-to-square"></i><i id="delete" class="fa-solid fa-trash"></i><i class="fa-solid fa-check"></i></div> ';
  ul.appendChild(li);
}

function addTodo() {
  itemsArray.push(input.value);
  localStorage.setItem("todos", JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = "";
}

function deleteTodo() {
  localStorage.clear();
  ul.innerHTML = "";
  itemsArray = [];
}
