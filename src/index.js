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
    box.setAttribute('id', "b"+listToDraw[i].index);
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

    const edit = document.createElement('i');
    edit.setAttribute('class', 'fas fa-edit');
    edit.setAttribute('id', 'e'+listToDraw[i].index);


    options.appendChild(edit)
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
    mainList.toggle(parseInt(el.id.substring(1)));
  }));
}

function addSaveListener(){
  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', () => {
    const description=document.getElementById('taskDescription').value;
    mainList.addTask(description);
    refreshList();
    addDeleteListeners();
    addEditListeners()
    document.getElementById('taskDescription').value="";

  })
}

function addDeleteListeners() {
  const deleteButton = document.querySelectorAll('.fa-trash');
  deleteButton.forEach((el) => el.addEventListener('click', () => {
    mainList.removeTask(parseInt(el.id.substring(1)));
    refreshList();
    addDeleteListeners();
    addEditListeners()
  }));
}

function addEditListeners() {
  const editButton = document.querySelectorAll('.fa-edit');
  editButton.forEach((el) => el.addEventListener('click', () => {

    let task=mainList.getTaskInfo(parseInt(el.id.substring(1)));

    document.getElementById('taskFormTitle').innerHTML="Edit Task";
    document.getElementById('saveButton').innerHTML="Update";


    document.getElementById('taskDescription').value=task.description;

    refreshList();
    addDeleteListeners();
    addEditListeners()
  }));
}

window.onload = () => {

  refreshList();
  addSaveListener();
  addBoxListeners();
  addDeleteListeners();
  addEditListeners()
};
