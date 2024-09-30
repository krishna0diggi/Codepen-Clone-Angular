import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = [
    {name: "Ramesh", isSingle:true, salary: 220000},
    {name: "Suresh", isSingle:true, salary: 2200},
    {name: "Naresh", isSingle:false, salary: 20000}
  ]
  // title = 'project';
}
