import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';
import List from './list.js';


let mainList = new List();


function list() {
  const ul = document.createElement('ul');
  const listToDraw=mainList.getTasks();
  for (let i = 0; i < listToDraw.length; i++) { // eslint-disable-line no-plusplus
    let box = document.createElement('input');
    box.setAttribute('type', 'checkbox');
    box.setAttribute('class', 'checkbox');
    box.setAttribute('id', i);
    box.checked = listToDraw[i].completed;

    const textContainer = document.createElement('div');
    textContainer.textContent = listToDraw[i].description;

    const element = document.createElement('li');

    const drag = document.createElement('i');
    drag.setAttribute('class', 'fas fa-ellipsis-v');

    element.setAttribute('class', 'listElement');

    element.appendChild(box);
    element.appendChild(textContainer);
    element.appendChild(drag);

    ul.append(element);
  }

  return ul;
}


function addBoxListeners() {
  const checkBox = document.querySelectorAll('.checkbox');
  checkBox.forEach((el) => el.addEventListener('click', () => {
    mainList.toggle(el.id);
  }));
}

function addSaveListener(){
  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', () => {
    const description=document.getElementById('taskDescription').value;
    mainList.addTask(description);
  })
}

window.onload = () => {

  const listContainer = document.getElementById('todoList');
  listContainer.appendChild(list());
  addSaveListener();
  addBoxListeners();
};
