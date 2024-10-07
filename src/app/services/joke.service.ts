import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  joke = "loading"

  // This is called dependency Injection:
  // Method - 1 
  constructor(private http:HttpClient) {}

  //Method - 2
  // private http = inject(HttpClient)

   getJoke() {
    return this.http.get("https://api.chucknorris.io/jokes/random?category=animal")
    }
 
}
