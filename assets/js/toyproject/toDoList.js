/*
 * to do list
 */

const taskForm = document.querySelector('#toDoList .input-task');
const taskInput = document.querySelector('#toDoList .input-task input');
const btnAdd = document.querySelector('#toDoList .btn-add');
const taskList = document.querySelector('#toDoList .task-list');

createElement({ tagName: 'div', properties: { id: 'toDoList' }, parent: document.body });

function createElement({ tagName, properties, parent, children, count = 1 }) {
  const create = () => {
    const element = document.createElement(tagName);
    Object.assign(element, properties); // Object.assign() : 첫번째 object에 두번째 object를 병합해줌. (만약 똑같은 key가 있다면 두번째의 key를 그대로 덮어씌움.)
    parent?.appendChild(element);
    children?.map((child) => {
      child.parent = element;
      createElement(child);
    });
    return element;
  };

  if (count > 1) {
    const results = [];
    for (let i = 0; i < count; i++) {
      results.push(create());
    }
    return results;
  } else {
    return create();
  }
}
