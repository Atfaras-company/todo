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
  if (!addInput.value.trim()) {
    return;
  }

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
  var todosArray = JSON.parse(localStorage.getItem("todos")) || [];
  var todoIndex = todosArray.findIndex((todo) => todo.id === id);
  
  todosArray = todosArray.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }

    return todo;
  });
  localStorage.setItem("todos", JSON.stringify(todosArray));
  const clickedTodo = document.getElementById(`todo${id}`);
  if (todosArray[todoIndex].completed === true) {
    clickedTodo.classList.add("completed");
  }else{
    clickedTodo.classList.remove("completed");
  }
}
