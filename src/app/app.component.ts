import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  currUser : User | undefined


  onSelectUserComp(id : string){
    console.log(this.currUser)
    const currUserProf = DUMMY_USERS.find(( user => user.id === id))
    this.currUser = currUserProf
  }
}
