import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
    this.saveOnLocalStorage(this.taskList)
  }

  public saveOnLocalStorage(task: TaskList[]) {
    let taskTojson = JSON.stringify(task)
    localStorage.setItem("list", taskTojson)
  }

  public setList(task: string) {
    this.taskList.push({ task: task, checked: false });
    this.saveOnLocalStorage(this.taskList)

  }

  public taskList: TaskList[] = JSON.parse(localStorage.getItem("list") || "[]")

  public onDelete(task: number) {
    this.taskList.splice(task, 1);
  }

  public onDeleteAll() {
    const confirm = window.confirm("Você quer mesmo deletar tudo?")
    if (confirm) {
      this.taskList = []
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Deseja excluir a task?")
      if (confirm) {
        this.onDelete(index)
      }
    }
  }
}
