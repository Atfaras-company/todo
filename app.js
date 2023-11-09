const todoList = document.querySelector("ul.todoList");
const addInput = document.getElementById("todo");
let todosArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

todosArray.forEach((item) => {
  addTask(item);
});

function addTask(item) {
  const li = `
    <li id="todo${item.id}">
      <h2>${item.title}</h2>
      <div id="icons">
        <i
          id="edit${item.id}"
          onclick="editTodo(${item.id})"
          class="fa-solid fa-pen-to-square"
        ></i
        ><i id="delete" onclick="deleteTodo(${
          item.id
        })" class="fa-solid fa-trash"></i
        >
        <input onclick="completedTodo(${
          item.id
        })" id="completedTodo" type="checkbox" ${
    item.completed ? "checked" : ""
  }>
      </div>
    </li>
    `;
  todoList.innerHTML += li;
}

function addTodo() {
  const newTodo = {
    id: todosArray.length,
    title: addInput.value,
    completed: false,
  };
  todosArray.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todosArray));
  addTask(newTodo);
  addInput.value = "";
}

function deleteAllTodo() {
  localStorage.clear();
  todoList.innerHTML = "";
  todosArray = [];
}

let isEdit = true;
function editTodo(id) {
  const editedTodo = prompt("Write new todo ");
  todosArray = todosArray.map((item) => {
    if (item.id === id) {
      item.title = editedTodo;
    }
    return item;
  });

  todoList.innerHTML = "";
  todosArray.forEach((item) => {
    addTask(item);
  });
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function deleteTodo(id) {
  todosArray = todosArray.filter((item) => item.id !== id);
  todoList.innerHTML = "";
  todosArray.forEach((item) => {
    addTask(item);
  });
  localStorage.setItem("todos", JSON.stringify(todosArray));
}

function completedTodo(id) {
  var checked = false;
  if (document.querySelector("#completedTodo:checked")) {
    checked = true;
    document.getElementById("todo" + id).style.backgroundColor = "green";
    document.getElementById("todo" + id).style.textDecoration = "line-through";
    document.getElementById("todo" + id).style.opacity = "0.6";
    document.getElementById("edit" + id).style.visibility = "hidden";
  } else {
    document.getElementById("edit" + id).style.visibility = "visible";
    document.getElementById("todo" + id).style.textDecoration = "blink  ";
    document.getElementById("todo" + id).style.opacity = "1";
    document.getElementById("todo" + id).style.backgroundColor =
      "rgb(34, 220, 198)";
  }
}
