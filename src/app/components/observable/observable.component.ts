import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { map,Observable, toArray, tap, fromEvent, from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

interface Profile {
  name: string;
  position: string;
  experience: number; // Added experience field for filtering
}

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})


export class ObservableComponent implements OnInit{

  // @ViewChild('search', {static: true}) serach? = ElementRef<HTMLInputElement>
  @ViewChild('search') searchInput?:ElementRef<HTMLInputElement>;
  // profileData$:Observable<Profile[]>

  ngOnInit(){
    const profileData = new Observable<Profile>((subscriber)=> {

      // fromEvent(this.serach!.nativeElement, "input")


      subscriber.next({ name: "Jack", position: "Full Stack Developer", experience: 3 });
      subscriber.next({ name: "Bob", position: "Jr UI/UX Designer", experience: 1 });
      subscriber.next({ name: "Devin", position: "Backend Developer", experience: 2 });
      subscriber.next({ name: "Peter", position: "Frontend Developer", experience: 4 });
      subscriber.next({ name: "Harry", position: "Project Manager", experience: 5 });
      subscriber.complete();
    }).pipe(
      toArray(),

      // We can use it to log or perform some side effects at various points in the observable chain
      tap(profiles=> console.log("Profile coming from the TAP Observable", profiles)),
      
      map((profiles: Profile[])=> {
        return profiles.filter((profile)=>profile.position.includes("Developer") && profile.experience > 2)
        .map((profile)=> profile.name)
      })
    )
    profileData.subscribe({
      next: (names)=> console.log(names),
      complete: () => console.log('Completed')
    })
  }

  ngAfterViewInit() {
    if(this.searchInput)
    {
      console.log("Current Value is this", this.searchInput)

      const searchObs = fromEvent(this.searchInput.nativeElement,"input")
      .pipe(
        map((e:any)=> {
          return ajax(`https://api.github.com/search/users?q=${e.target.value}`)
        })
      )
      searchObs.subscribe((value:any)=>
      console.log("Subscribe value is this:", value))

      // We are converting evenet to Observable
      // fromEvent(this.searchInput.nativeElement, "input").subscribe((event:Event)=>{
      //   const input = (event.target as HTMLInputElement).value;
      //   console.log("INput Value", input)
      // })
    }
  }
 
}
