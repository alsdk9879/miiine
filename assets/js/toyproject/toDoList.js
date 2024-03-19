/*
 * to do list
 */

const taskForm = document.querySelector('#toDoList .input-task');
const taskInput = document.querySelector('#toDoList .input-task input');
const btnAdd = document.querySelector('#toDoList .btn-add');
const taskList = document.querySelector('#toDoList .task-list');

let tasks = [];

function saveToDoList() {
  localStorage.setItem('task', JSON.stringify(tasks));
}

function deleteToDoList(event) {
  const taskItem = event.target.closest('.task-item');
  taskItem.remove();
  tasks = tasks.filter((task) => task.id !== parseInt(taskItem.id));
  saveToDoList();
}

function doneToDo(event) {
  const taskItem = event.target.closest('.task-item');
  taskItem.classList.toggle('done');

  if (taskItem.classList.contains('done')) {
  }
}

function paintToDoList(newTaskObj) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.id = newTaskObj.id;
  taskItem.innerHTML = `<button type="button" class="btn-check"><i class="fa-regular fa-circle"></i></button>
    <span class="task-name">${newTaskObj.text}</span>
    <div class="btn-wrap">
      <button type="button" class="btn-edit"><i class="fa-regular fa-pen-to-square"></i></button>
      <button type="button" class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>
    </div>`;

  taskList.appendChild(taskItem);

  const btnCheck = document.querySelectorAll('.task-item .btn-check');
  btnCheck.forEach((el) => {
    el.addEventListener('click', doneToDo);
  });

  const btnDelete = document.querySelectorAll('.task-item .btn-delete');
  btnDelete.forEach((el) => {
    el.addEventListener('click', deleteToDoList);
  });
}

function handleToDoList(event) {
  event.preventDefault();
  const newTask = taskInput.value;
  taskInput.value = '';
  const newTaskObj = {
    text: newTask,
    id: Date.now(),
    class: '',
  };
  tasks.push(newTaskObj);
  paintToDoList(newTaskObj);
  saveToDoList();
}

taskForm.addEventListener('submit', handleToDoList);
btnAdd.addEventListener('click', handleToDoList);

const savedTasks = localStorage.getItem('task');

if (savedTasks !== null) {
  const parsedTasks = JSON.parse(savedTasks);
  tasks = parsedTasks;
  parsedTasks.forEach(paintToDoList);
}
