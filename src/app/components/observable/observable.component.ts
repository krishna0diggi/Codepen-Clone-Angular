import { Component, OnInit } from '@angular/core';
import { map,Observable, toArray, tap } from 'rxjs';

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

  ngOnInit(){
    const profileData = new Observable<Profile>((subscriber)=> {
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
 
}
