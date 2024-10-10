import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, input } from '@angular/core';
import { map,Observable, toArray, tap, fromEvent, from, switchMap, delay, debounceTime , Subscription} from 'rxjs';
import { ajax } from 'rxjs/ajax';

interface Profile {
  name: string;
  position: string;
  experience: number; // Added experience field for filtering
}

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
}

interface GitHUbResponse{
  items: GitHubUser[];
}


@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})


export class ObservableComponent implements OnInit{

  // @ViewChild('search', {static: true}) serach? = ElementRef<HTMLInputElement>
  @ViewChild('search') searchInput?:ElementRef<HTMLInputElement>;
  // profileData$:Observable<Profile[]>
  users: GitHubUser[] = [];
  typeAheadSub?:Subscription

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
      // console.log("Current Value is this", this.searchInput)

      const searchObs = fromEvent(this.searchInput.nativeElement,"input")
      .pipe(
        // In switchMap one issue is there, Suppose this is my text - krishna, So it will call the API like this, k kr kri kris krish krishn krishna , So totak 7 API's
        // But This is one is also calling API's 7 times, but after merging at once, Anyways it is better than the map 
        // But There us one more way we can do that is: -->
        //  debounce time 


        // One more solition is that we can use delay(1000), With this it will call the API after every one second:
        // delay(1000)

        // The best solition is to use the debounceTime  ( with Optimize way )


        debounceTime(1000),
        switchMap((e:Event)=> {
          const input = (e.target as HTMLInputElement).value;
          return ajax<GitHUbResponse>(`https://api.github.com/search/users?q=${input}`)
        }),
        map(ajaxRes  => ajaxRes.response.items) 
      )
      // searchObs.subscribe((value:any)=>
      // console.log("Subscribe value is this:", value))
      this.typeAheadSub = searchObs.subscribe({
        next: (res) => {
        console.log("Subscribe value is this:", res)
        this.users = res;
      },
        error: (err) => console.error("Error fetching data: ",err)
      })

      // We are converting evenet to Observable
      // fromEvent(this.searchInput.nativeElement, "input").subscribe((event:Event)=>{
      //   const input = (event.target as HTMLInputElement).value;
      //   console.log("INput Value", input)
      // })
    }
  }
  

   // To prevent the Memory Leak we use unsubscribe like this:
  ngDestroy() {
    if (this.typeAheadSub) {
      this.typeAheadSub.unsubscribe();
    }
  }
 
}
