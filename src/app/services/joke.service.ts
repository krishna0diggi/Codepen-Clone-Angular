import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  joke = "loading"

  constructor(private http:HttpClient) {}
  // This is called dependency Injection: 

   getJoke() {
    return this.http.get("https://api.chucknorris.io/jokes/random?category=animal")
    }
 
}
