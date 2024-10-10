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
