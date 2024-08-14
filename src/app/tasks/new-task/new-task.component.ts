import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormData } from '../../types';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required : true}) userId! : string
  @Output() cancel = new EventEmitter()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''

  constructor(private tasksService : TasksService){}
  

  onCancel(){
    this.cancel.emit()
  }

  onFormSubmitHandler(){
    this.tasksService.addNewTask({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    }, this.userId)
    this.cancel.emit()
  }

}
