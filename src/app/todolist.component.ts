import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { TodoService } from "./todo.service";
@Component({
  selector: 'todo-list',
  templateUrl: 'todolist.component.html'
})
export class TodoListComponent implements OnInit {
  //declarations
  currentItem: string;
  newTodo: string;
  todos: any;
  todoDone: any;
  text: string;
  completed: boolean;

  constructor(private _todoService: TodoService) {
    this.currentItem = (localStorage.getItem('currentItem') !== null) ? JSON.parse(localStorage.getItem('currentItem')) : [];
    this.todos = this.currentItem;
  }
  //add new todo
  @ViewChild('todoText',{static:true}) todoText : ElementRef;
  addTodo(todoText) {
    var newTodo = {
      text: this.text,
      completed: false
    }
    this.todos.push(newTodo);
    this.todoText.nativeElement.value = "";
    this._todoService.addTodo(newTodo);
    return false;
  }
  //delete todo
  deleteTodo(id) {
    this.todos.splice(id, 1);
    this._todoService.deleteTodo(id);
  }
  //set todo as completed and update localstorage
  toggleCompletion(id) {
    let todo = this.todos[id];
    todo.completed = !todo.completed;

    var toggled = {
      text: todo.text,
      completed: todo.completed
    }
    this._todoService.updateTodo(toggled);    
  }
  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }
}
