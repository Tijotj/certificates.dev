import { Component, Signal, signal, inject, effect } from '@angular/core';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { Movie } from './model/movie.model';
import { MoviesService } from './services/movies.service';  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent
  ]
})
export class AppComponent {

  movie: Movie = {
    "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
    "title": "Harry Potter and the Philosopher's Stone",
    "duration": 152,
    "budget": 125,
    "release_date": "2001-11-04"
  };
  movieServ = inject(MoviesService);
  movieList: Signal<Movie[]>= this.movieServ.getMovies(); 
 constructor() {
	effect(()=>{
		console.log("Movie List: ", this.movieList());	
	});
}
}
