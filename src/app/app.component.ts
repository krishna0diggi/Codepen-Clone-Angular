import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from './model/user';
import { JokeComponent } from './components/joke/joke.component';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  NavbarComponent, UserProfileComponent, LoginComponent, SignupComponent, CommonModule, JokeComponent, AComponent,B1Component, B2Component, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){initializeApp(firebaseConfig);}
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

  clear() {
    this.users = []
  }
}
