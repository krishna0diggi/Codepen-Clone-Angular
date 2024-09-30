import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name:string = "Krishna"
  Designation:string = "Junior Web Developer"
  salary:number = 2000
  isDisable = false
  inputvAL = "INPUT"

  users = [
    {name: "Ramesh", isAval:true, salary: 10000},
    {name: "Suresh", isAval:true, salary: 15000},
    {name: "Naresh", isAval:false, salary: 20000}
  ]


  onChange(e:Event) {
    const values = (e.target as HTMLInputElement).value
    // console.log(values)

    // Two WayBinding data is here: Data is changes accordingly
    this.inputvAL = values
  }

  ondelete(){
    console.log(this.inputvAL)

  }
}
