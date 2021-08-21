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
    let newId;

    if (this.todoList.length===0){
      newId=1
    }else{
      newId=this.todoList[this.todoList.length-1].index+1;
      console.log(newId)
    }


    this.todoList.push(new ListElement(description, false,newId))
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  getTasks(){
    return this.todoList;

  }

  editTask(){

  }

  removeTask(id){


    let indexToRemove=this.todoList.findIndex(element => element.index === id);

    this.todoList.splice(indexToRemove, 1);
    this.updateIds();
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  toggle(id){
    this.todoList[id].completed = !this.todoList[id].completed;
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  updateIds(){
    for (var i = 0; i < this.todoList.length; i++) {
      this.todoList[i].index=i+1;
    }
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
}

export default List
