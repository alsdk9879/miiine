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

function saveToDoList() {}

function deleteToDoList(btnDelete) {
  const taskItem = btnDelete.target.parentNode;
  taskItem.remove();
}

function createToDoList(newToDo) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskName = document.createElement('span');
  taskName.classList.add('task-name');
  taskName.innerText = newToDo;

  const btnDelete = document.createElement('button');
  btnDelete.classList.add('btn-delete');
  btnDelete.innerText = 'X';
  btnDelete.addEventListener('click', deleteToDoList);

  taskItem.appendChild(taskName);
  taskItem.appendChild(btnDelete);
  toDoList.appendChild(taskItem);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  createToDoList(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
btnAdd.addEventListener('click', handleToDoSubmit);

// done task-list check
document.querySelectorAll('.btn-check').forEach((el) => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('done');
  });
});
