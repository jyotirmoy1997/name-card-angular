import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { FormData, Task, User } from '../types';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) selectedUser! : User
  tasks : Task[] = dummyTasks
  isTaskAvailable = false

  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.selectedUser?.id)
  }

  deleteTask(id : string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  showTask(){
    this.isTaskAvailable = true
  }

  hideTask(){
    this.isTaskAvailable = false
  }

  addTask(newTask : FormData){
    this.tasks.push({
      id : 't4',
      userId : this.selectedUser.id,
      title : newTask.title,
      summary : newTask.summary,
      dueDate : newTask.date
    })
    this.isTaskAvailable = false
  }
}
