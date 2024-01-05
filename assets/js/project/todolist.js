/*
 * layout
 */
document.querySelector('.header .btn-menubar').addEventListener('click', () => {
  document.querySelector('.nav').classList.add('open');
});

document.querySelector('.nav .btn-menubar').addEventListener('click', () => {
  if (window.innerWidth > 1299.98) {
    document.querySelector('#todolist').classList.toggle('fold');
  } else {
    document.querySelector('.nav').classList.toggle('open');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 1299.98) {
    document.querySelector('#todolist').classList.remove('fold');
  }
});

/*
 * tab
 */
const tabList = document.querySelectorAll('.btn-tab button');
const tabCont = document.querySelectorAll('.task-list');

tabList.forEach((tab, index) => {
  tab.addEventListener('click', function () {
    tabList.forEach((el) => {
      el.classList.remove('active');
    });
    tabList[index].classList.add('active');

    tabCont.forEach((cont) => {
      cont.classList.remove('active');
    });
    // tabCont[index].classList.add('active');
  });
});

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
//'진행중 끝남' 탭을 클릭하면, underBar가 이동한다.
//'Done 탭'은 -> 완료 아이템만, 'not Done 탭'은 -> 진행중인 아이템만
//'All 탭'을 클릭하면, 다시 전체아이템으로 돌아온다.

// let input = document.getElementById("input");
// let btnAdd = document.getElementById("btn-add");
// let taskList = [];    //taskList라는 배열에 추가된 할일을 담는다.

// btnAdd.addEventListener("click", addTask);

// function addTask(){
//   let task = {
//     id: "",
//     taskContent: input.value,
//     isComplete: false
//   };

//   taskList.push(task);
//   console.log(taskList);
//   render();
// }

// // 할 일 추가
// function render(){
//   let resultHTML = '';

//   for( let i = 0; i < taskList.length; i++ ){
//     resultHTML += `<div class="task-list">
//     <div class="title">${taskList[i].taskContent}</div>
//     <div class="btn-list">
//       <button class="check" onclick="toggleComplete()">Check</button>
//       <button class="delete">Delete</button>
//     </div>
//   </div>`;
//   }

//   document.getElementById("task-list-wrap").innerHTML = resultHTML;
// }

// function toggleComplete(){
//   console.log("check!")
// }

// input task value
let input = document.querySelector('.inputbox input');
let btnAdd = document.querySelector('.inputbox .btn-add');
let taskList = []; // taskList 라는 배열에 추가된 할 일을 담는다.

// task-list check
document.querySelectorAll('.btn-check').forEach((el) => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('done');
  });
});

// input-task inputbox tab
const btnTab = document.querySelectorAll('.input-task .btn-wrap button');

btnTab.forEach((el, index) => {
  el.addEventListener('click', () => {
    btnTab.forEach((el) => {
      el.classList.remove('active');
    });
    btnTab[index].classList.add('active');
  });
});
