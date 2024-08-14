import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { FormData, Task, User } from '../types';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) selectedUser! : User
  isTaskAvailable = false

  constructor(private tasksService : TasksService){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.selectedUser.id)
  }

  deleteTask(id : string){
    return this.tasksService.deleteTask(id)
  }

  showTask(){
    this.isTaskAvailable = true
  }

  hideTask(){
    this.isTaskAvailable = false
  }

  addTask(newTask : FormData){
    this.tasksService.addNewTask(newTask, this.selectedUser.id)
    this.isTaskAvailable = false
  }
}
