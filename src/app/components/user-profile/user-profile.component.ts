import { CommonModule } from '@angular/common';
import { AfterViewInit, booleanAttribute, Component, ElementRef, EventEmitter, Input, numberAttribute, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
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
export class UserProfileComponent  implements OnInit, OnDestroy, OnChanges, AfterViewInit{
 

  @Input({alias: "userName"}) name=""
  @Input({transform: booleanAttribute}) isSingle:boolean;
  @Input({transform: numberAttribute}) salary: number;

  @Output() myEvent = new EventEmitter<{name:string, newSalary:number}>()

  sendData(){
    this.myEvent.emit({name: this.name, newSalary:25000})
  }

   /**
   * This is the constructor.
   * It runs when the component is created and logs the name.
   */
  constructor() {
    console.log("Constructor called", this.name)
    console.log("Constructor called", this.heading?.nativeElement.textContent)
  }

  // Lifecycle for calling this :
  //  Contructor called:
  //  ngOnChanges called
  //  ngOnInt called
  //  ngAfterViewInit called

  

  // After Ready the Template the ngAfterViewInit is callled: 
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log("ngAfterViewInit View Element")
  }
  


   /**
   * This method runs when any input properties change.
   * It shows a message in the console with the changes.
   *
   * @param changes - This tells us what properties changed.
   */
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("ngOnChanges is called")
    console.log("ngOnChanges called", this.heading?.nativeElement.textContent)
  }

   /**
   * This method runs when the component is fully set up.
   * It’s a good place to do any setup tasks and logs a message with the name.
   */
  ngOnInit(): void {
    console.log("ngOnInit called", this.name)
    console.log("ngOnInit called", this.heading?.nativeElement.textContent)
  }

   /**
   * This method runs just before the component is removed from the screen.
   * Use this to clean up things, like stopping services.
   * It logs a message when the component is being destroyed.
   */

  ngOnDestroy() {
    console.log("Component destroy")
  }

  @ViewChild("myheading") heading?:ElementRef








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
