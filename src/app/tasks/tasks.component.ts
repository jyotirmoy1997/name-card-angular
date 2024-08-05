import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../dummy-tasks';
import { Task, User } from '../types';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required : true}) selectedUser : User | undefined
  tasks : Task[] = dummyTasks

  get selectedUserTasks(){
    return this.tasks.filter(task => task.userId === this.selectedUser?.id)
  }
  deleteTask(id : string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
