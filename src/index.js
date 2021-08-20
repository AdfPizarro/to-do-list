import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';

let todoList = [];

class ListElement {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

function list() {
  const ul = document.createElement('ul');

  for (let i = 0; i < todoList.length; i++) { // eslint-disable-line no-plusplus
    const box = document.createElement('input');
    box.setAttribute('type', 'checkbox');
    box.setAttribute('class', 'checkbox');
    box.setAttribute('id', i);
    box.checked = todoList[i].completed;

    const textContainer = document.createElement('div');
    textContainer.textContent = todoList[i].description;

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

function toggle(id) {
  todoList[id].completed = !todoList[id].completed;
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addListeners() {
  const checkBox = document.querySelectorAll('.checkbox');
  checkBox.forEach((el) => el.addEventListener('click', () => {
    toggle(el.id);
  }));
}

window.onload = () => {
  if (localStorage.getItem('todoList') === null) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  } else {
    todoList = JSON.parse(localStorage.getItem('todoList'));
  }

  const listContainer = document.getElementById('todoList');
  listContainer.appendChild(list());

  addListeners();
};
