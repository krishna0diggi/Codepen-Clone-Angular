import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  joke = "loading"

  // This is called dependency Injection:
  // Method - 1 [ Recommended ]
  constructor(private http:HttpClient) {}

  //Method - 2 ( If we want to access the service but that service is defined under the funtion not in the class the this syntax we have to use.)
  // private http = inject(HttpClient)

   getJoke() {

    // It returns Observable - Async line of code it will take time to load
    return this.http.get("https://api.chucknorris.io/jokes/random?category=animal")
    }
 
}
