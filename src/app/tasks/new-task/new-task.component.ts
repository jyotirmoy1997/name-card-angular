import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormData } from '../../types';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter()
  @Output() formData = new EventEmitter<FormData>()
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = ''
  

  onCancel(){
    this.cancel.emit()
  }

  onFormSubmitHandler(){
    this.formData.emit({
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
    })
  }

}
