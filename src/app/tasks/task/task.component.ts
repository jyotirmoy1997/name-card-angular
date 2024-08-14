import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../types';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required : true}) task! : Task
  constructor(private tasksService : TasksService){}

  onCompleteTask(){
    this.tasksService.deleteTask(this.task.id)
  }
}
