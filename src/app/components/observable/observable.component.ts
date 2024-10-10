import { Component } from '@angular/core';
import { map,Observable, toArray } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})

interface Profile{
  name: string,aimport { Component, OnInit } from '@angular/core';
  import { map, Observable, toArray } from 'rxjs';
  
  // Define the Profile interface
  interface Profile {
    name: string;
    position: string;
  }
  
  @Component({
    selector: 'app-observable',
    standalone: true,
    templateUrl: './observable.component.html',
    styleUrls: ['./observable.component.css'], // Corrected to styleUrls
  })
  export class ObservableComponent implements OnInit { // Implement OnInit
  
    ngOnInit() {
      // Create the observable for profile data
      const profileData = new Observable<Profile>((subscriber) => {
        subscriber.next({ name: "Krishna", position: "Full Stack Developer" });
        subscriber.next({ name: "Vicky", position: "Jr UI/UX Designer" });
        subscriber.complete();
      }).pipe(
        toArray(), // Collects all emitted values into an array
        map((profiles: Profile[]) => {
          return profiles.map((profile) => profile.name); // Returns an array of names
        })
      );
  
      // Subscribe to the observable to log the results
      profileData.subscribe({
        next: (names) => console.log(names), // Logs: ['Krishna', 'Vicky']
        complete: () => console.log('Completed'),
      });
    }
  }
  
  position: string
}


export class ObservableComponent {

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
