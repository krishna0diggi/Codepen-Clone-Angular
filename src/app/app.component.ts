import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    {id:1, name: "Ramesh", isSingle:true, salary: 220000},
    {id:2,name: "Suresh", isSingle:true, salary: 2200},
    {id:3 ,name: "Naresh", isSingle:false, salary: 20000}
  ]

  // title = 'project';

  receivedData(val:User)
  {
    console.log("Current user data", val)
    const userIndex = this.users.findIndex(user => user.name == val.name)
    this.users[userIndex].salary = val.newSalary;
    console.log("Currne sakary of the user", userIndex)
    console.log("This is the new salary for the name:")
  }
}
