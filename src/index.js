import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';
import List from './list.js';


let mainList = new List();


function refreshList() {
  const listContainer = document.getElementById('todoList');
  listContainer.innerHTML="";



  const ul = document.createElement('ul');
  const listToDraw=mainList.getTasks();
  for (let i = 0; i < listToDraw.length; i++) { // eslint-disable-line no-plusplus
    let box = document.createElement('input');
    box.setAttribute('type', 'checkbox');
    box.setAttribute('class', 'checkbox');
    box.setAttribute('id', i);
    box.checked = listToDraw[i].completed;

    let options = document.createElement('div');
    options.setAttribute('class', 'options');


    let trash = document.createElement('i');
    trash.setAttribute('class', 'fas fa-trash');
    trash.setAttribute('id', 'd'+listToDraw[i].index);


    const textContainer = document.createElement('div');
    textContainer.setAttribute('class', 'inputs');
    textContainer.textContent = listToDraw[i].description;

    const element = document.createElement('li');

    const drag = document.createElement('i');
    drag.setAttribute('class', 'fas fa-ellipsis-v');

    options.appendChild(drag)
    options.appendChild(trash)

    element.setAttribute('class', 'listElement');

    element.appendChild(box);
    element.appendChild(textContainer);
    element.appendChild(options);

    ul.append(element);
  }

  listContainer.appendChild(ul);

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
    refreshList();
    addDeleteListeners();
    document.getElementById('taskDescription').value="";

  })
}

function addDeleteListeners() {
  const deleteButton = document.querySelectorAll('.fa-trash');
  deleteButton.forEach((el) => el.addEventListener('click', () => {
    mainList.removeTask(parseInt(el.id.substring(1)));
    refreshList();
    addDeleteListeners();
  }));
}

window.onload = () => {

  refreshList();
  addSaveListener();
  addBoxListeners();
  addDeleteListeners();
};
