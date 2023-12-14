/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.record = new Array();
  }
  add(data) {
    this.record.push(data);
  }
  remove(index) {
    if (index >= this.record.length) {
      console.log("Invalid Index out of range");
      return;
    }
    const recordData = this.record[index];
    this.record.splice(index, 1);
    console.log(`Data at index ${index} is being remove : ${recordData}`);
  }
  update(index, newValue) {
    if (index >= this.record.length) {
      console.log("out of range");
    }
    this.record[index] = newValue;
    return;
  }
  getAll() {
    console.log(this.record);
  }
  get(index) {
    if (index >= this.record.length) {
      console.log("out of range");
    }
    console.log(this.record[index]);
  }
  clear() {
    this.record.splice(0, this.record.length);
  }
}

const todo = new Todo();
//write test for todo object and perform all the methods
todo.add(1);
todo.add(2);
todo.update(0, 5);
todo.getAll();
todo.remove(0);
todo.remove(10);
todo.getAll();
todo.get(0);
todo.clear();
todo.getAll();

module.exports = Todo;
