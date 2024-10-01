import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, EventEmitter, Input, numberAttribute, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../directives/highlight.directive';

// const formatName = (value:string) => {
//   return "Hi" + value;
// }
function formatName (value:string) {
  return "Hi" + " " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  @Input({alias: "userName"}) name=""
  @Input({transform: booleanAttribute}) isSingle:boolean;
  @Input({transform: numberAttribute}) salary: number;

  @Output() myEvent = new EventEmitter<{name:string, newSalary:number}>()

  sendData(){
    this.myEvent.emit({name: this.name, newSalary:25000})
  }





  // name:string = "Krishna"
  // Designation:string = "Junior Web Developer"
  // salary:number = 2000
  // isDisable = false
  // inputvAL = "INPUT"

  // users = [
  //   {name: "Ramesh", isAval:true, salary: 10000},
  //   {name: "Suresh", isAval:true, salary: 15000},
  //   {name: "Naresh", isAval:false, salary: 20000}
  // ]


  // onChange(e:Event) {
  //   const values = (e.target as HTMLInputElement).value
  //   // console.log(values)

  //   // Two WayBinding data is here: Data is changes accordingly
  //   this.inputvAL = values
  // }

  // ondelete(){
  //   console.log(this.inputvAL)

  // }
}
