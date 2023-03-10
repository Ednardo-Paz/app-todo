import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})

export class TodoInputAddItensComponent {
  @Output() public emmitTaskList = new EventEmitter()
  public addTask: string = "";
  public submitItemTaskList() {
    this.addTask = this.addTask.trim()
    if (!this.addTask) {
      return
    }
    this.emmitTaskList.emit(this.addTask);
    this.addTask = ""
  }
}
