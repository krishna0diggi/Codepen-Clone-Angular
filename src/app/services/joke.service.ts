import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  http:HttpClient

  constructor(http:HttpClient) {
    this.http = http
   }

   getJoke() {
    
   }
}
