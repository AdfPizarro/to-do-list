import ListElement from './task.js';

class List { // eslint-disable-line no-unused-vars
  constructor() {
    this.todoList = [];
    if (localStorage.getItem('todoList') === null) {
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    } else {
      this.todoList = JSON.parse(localStorage.getItem('todoList'));
    }
  }

  addTask(description){
    this.todoList.push(new ListElement(description, false, this.todoList.length+1))
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  getTasks(){
    return this.todoList;
  }

  editTask(){

  }

  removeTask(){

  }

  toggle(id){
    this.todoList[id].completed = !this.todoList[id].completed;
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}

export default List
