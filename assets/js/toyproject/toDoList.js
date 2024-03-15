/*
 * to do list
 */

const toDoForm = document.querySelector('#toDoList .input-task');
const toDoInput = document.querySelector('#toDoList .input-task input');
const btnAdd = document.querySelector('#toDoList .btn-add');
const toDoList = document.querySelector('#toDoList .task-list');

// done task-list check
document.querySelectorAll('.btn-check').forEach((el) => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('done');
  });
});
