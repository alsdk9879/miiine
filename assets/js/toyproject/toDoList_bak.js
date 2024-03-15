/*
 * to do list
 */

//유저가 값을 입력한다.
//'+ 버튼'을 클릭하면, 할 일이 추가된다.
//'check 버튼'을 클릭하면, 할 일이 끝나면서 밑줄이 간다.
// => 1. 'check 버튼'을 클릭하는 순간, true false
// => 2. true 이면 끝난걸로 간주하고 밑줄
// => 3. false 이면 안 끝난걸로 간주하고 그대로
//'delete 버튼'을 클릭하면, 할 일이 삭제된다.
//'진행중, 끝남' 탭을 클릭하면, underBar가 이동한다.
//'Done 탭'은 -> 완료 아이템만, 'not Done 탭'은 -> 진행중인 아이템만
//'All 탭'을 클릭하면, 다시 전체아이템으로 돌아온다.

const toDoForm = document.querySelector('#toDoList .input-task');
const toDoInput = document.querySelector('#toDoList .input-task input');
const toDoList = document.querySelector('#toDoList .task-list');
const btnAdd = document.querySelector('#toDoList .input-task .btn-add');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(btnDelete) {
  const taskItem = btnDelete.target.parentNode;
  taskItem.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(taskItem.id));
  saveToDos();
}

// function createToDo(newToDo) {
//   const taskItem = document.createElement('li');
//   taskItem.classList.add('task-item');
//   taskItem.id = newToDo.id;

//   const taskName = document.createElement('span');
//   taskName.classList.add('task-name');
//   taskName.innerText = newToDo.text;

//   const btnDelete = document.createElement('button');
//   btnDelete.classList.add('btn-delete');
//   btnDelete.innerText = 'X';
//   btnDelete.addEventListener('click', deleteToDo);

//   taskItem.appendChild(taskName);
//   taskItem.appendChild(btnDelete);
//   toDoList.appendChild(taskItem);
// }

function createToDo(newToDo) {
  const taskItem = document.querySelectorAll('.task-list .task-item');
  taskItem.id = newToDo.id;

  const taskName = document.querySelectorAll('.task-list .task-name');
  taskName.innerText = newToDo.text;

  const btnDelete = document.querySelectorAll('.task-list .btn-delete');
  btnDelete.innerText = 'X';
  btnDelete.addEventListener('click', deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  createToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(createToDo);
}

// done task-list check
document.querySelectorAll('.btn-check').forEach((el) => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('done');
  });
});
