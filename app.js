const ul = document.querySelector("ul.todoList");
const input = document.getElementById("todo");
let itemsArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

itemsArray.forEach((item) => {
  addTask(item);
});
function addTask(item) {
  const li = `
    <li>
      <h2 id="title">${item.title}</h2>
      <div id="icons">
        <i
          id="edit"
          onclick="editTodo(${item.id})"
          class="fa-solid fa-pen-to-square"
        ></i
        ><i id="delete" onclick="deleteTodo(${
          item.id
        })" class="fa-solid fa-trash"></i
        >
        <input onclick="checkbox()" id="checkbox" type="checkbox" ${item.completed ? "checked" : ""}>
      </div>
    </li>
    `;
  console.log(ul);
  ul.innerHTML += li;
}

function addTodo() {
  const newTodo = {
    id: itemsArray.length,
    title: input.value,
    completed: false,
  };
  itemsArray.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(itemsArray));
  addTask(newTodo);
  input.value = "";
}

function deleteAllTodo() {
  localStorage.clear();
  ul.innerHTML = "";
  itemsArray = [];
}
let isEdit = true
function editTodo(id) {
  if (isEdit) {
    const editedTodo = prompt("Write new todo ");

  itemsArray = itemsArray.map((item) => {
    if (item.id === id) {
      console.log(id);
      item.title = editedTodo;
    }

    console.log(item);

    return item;
  });

  ul.innerHTML = "";
  itemsArray.forEach((item) => {
    addTask(item);

    
  });
  }
}
function deleteTodo(id) {
  itemsArray = itemsArray.filter((item) => item.id !== id);
ul.innerHTML = "" ;
  itemsArray.forEach((item) => {
    addTask(item);
  });
  localStorage.setItem("todos", JSON.stringify(itemsArray));
}
function checkbox(id) {

  var checked = false;
  if (document.querySelector('#checkbox:checked')) {
    isEdit = false;
     checked = true;
     document.getElementById("title").style.backgroundColor= 'green';
     document.getElementById("edit").style.visibility='hidden' ;
   }else{
    isEdit = true ;
    document.getElementById("edit").style.visibility='visible' ;
   }
   }