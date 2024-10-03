import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { error } from 'console';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
  joke="loading"
  constructor(private jokeService:JokeService)
  {}

  ngOnInit(){
    // this.jokeService.getJoke().subscribe((data:any)=> {
    // this.joke = data.value
    // })
    this.getAnotherJoke()
  }

  // getAnotherJoke(){ 
  //   this.jokeService.getJoke().subscribe((data:any)=> {
  //   this.joke = data.value
  //   }, (err=> {
  //     console.log("Error ho gya bhai..",err)
  //   }))
  // }

  
  // Method 2
  getAnotherJoke(){
    this.jokeService.getJoke().subscribe({
      next:(data:any) => this.joke = data.value,
      error:(error)=>console.log("Error aa gya bhai", error)
    })
  }

}
