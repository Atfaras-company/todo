const ul = document.querySelector('ul');
const input = document.getElementById('inputTodo');
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}

function addTodo(){
  itemsArray.push(inputTodo.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(inputTodo.value);
  inputTodo.value = '';
} 

function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}``  