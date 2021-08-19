import _ from 'lodash';
import './style.css';


class ListElement {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}


 function list() {
   let todoList=[];

   const ul = document.createElement('ul');


   todoList.push(new ListElement('Do one thing', false, 0));
   todoList.push(new ListElement('Do another thing', false, 1));
   todoList.push(new ListElement('Do onelast thing', false, 3));

   for (var i = 0; i < todoList.length; i++) {
     const element = document.createElement('li');
     element.textContent = todoList[i].description;
     ul.append(element);

   }

  // Lodash, now imported by this script

   return ul;
 }

const listContainer = document.getElementById('todoList');
listContainer.appendChild(list());
