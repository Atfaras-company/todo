const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li');
  li.innerHTML = text + '<div id="icons"> <i id="edit" class="fa-solid fa-pen-to-square"></i><i id="delete" class="fa-solid fa-trash"></i><i class="fa-solid fa-check"></i></div> ';
  ul.appendChild(li);
}

function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  addTask(input.value);
  input.value = '';
} 

function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}