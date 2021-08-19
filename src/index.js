import _ from 'lodash'; // eslint-disable-line no-unused-vars
import './style.css';

class ListElement {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

function list() {
  const todoList = [];

  const ul = document.createElement('ul');

  todoList.push(new ListElement('Do one thing', false, 0));
  todoList.push(new ListElement('Do another thing', false, 1));
  todoList.push(new ListElement('Do one last thing', false, 3));

  for (let i = 0; i < todoList.length; i++) { // eslint-disable-line no-plusplus
    const box = document.createElement('input');
    box.setAttribute('type', 'checkbox');

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

  // Lodash, now imported by this script

  return ul;
}

const listContainer = document.getElementById('todoList');
listContainer.appendChild(list());
