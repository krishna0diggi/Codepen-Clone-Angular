import { Component, OnInit } from '@angular/core';
import { map,Observable, toArray } from 'rxjs';

interface Profile{
  name: string,
  position: string
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

    // Data is sending form here
    // We can emit the data from here: 
    // const profileData = new Observable((subscriber) => {
    //   subscriber.next({ name: "Krishna", position: "Jr Full Stack Developer" });
    //   subscriber.next({ name: "Vicky", position: "Jr Frontend Developer" });
    //   subscriber.complete();
    // }).pipe(
    //   toArray(), // Collects all emitted values into an array
    //   map((profiles) => {
    //     return profiles.map((profile) => profile.name); // Returns an array of names
    //   })
    // );
    
    // Subscribe to the observable to log the results
    // profileData.subscribe({
    //   next: (names) => console.log(names), // Logs: ['Krishna', 'Vicky']
    //   complete: () => console.log('Completed'),
    // });

    const profileData = new Observable<Profile>((subscriber)=> {
      subscriber.next({name:"Krishna", position:"Full Stack Developer"})
      subscriber.next({name:"Vicky", position:"Jr UI/UX Designer"})
      subscriber.complete();
    }).pipe(
      toArray(),
      map((profile: Profile[])=> {
        return profile.map((profile)=> profile.name)
      })
    )

    profileData.subscribe({
      next: (names)=> console.log(names),
      complete: () => console.log('Completed')
    })
  }

}
