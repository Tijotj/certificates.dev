import {Component, Signal, inject, effect} from '@angular/core';
import { Movie } from '../model/movie.model';
import {MillionDollarPipe} from '../pipes/million-dollar.pipe';
import {MinToDurationPipe} from '../pipes/min-to-duration.pipe';
import { MoviesService } from '../services/movies.service';
import { HighlightDirective } from '../highlight.directive';
import { FavoritesService } from '../services/favorites.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  template: `
   @for(movie of movies();track movie.id){ 
     <div class="movie-item" appHighlight>
      <div>
        <h4>
          <!--<span class="icon-star" [class.active]="isFavorite()" (click)="toggleFavorite.emit(movie())"></span> -->
		<span class="icon-star" [class.active]="favServ.isFavorite(movie)()" (click)="favServ.toggleFavorite(movie)"></span> 
         {{ movie.title }}
        </h4>
        <small class="subtitle">
          <span>Release date: {{ movie.release_date }}</span>
          <span>Budget:  {{ movie.budget | millionDollar }} </span>
          <span>Duration: {{ movie.duration | minToDuration }}</span>
        </small>
      </div>

      <a routerLink="/details/{{movie.id}}">Details</a>
    </div>
  }
  `,
  imports: [
    MillionDollarPipe,
    MinToDurationPipe, 
    HighlightDirective,
    RouterLink
  ],
  styleUrls: ['movie-item.component.scss']
})
export class MovieItemComponent {
  protected movies: Signal<Movie[]> = inject(MoviesService).getMovies();
  protected favServ = inject(FavoritesService); 
  //movie  = input.required<Movie>();
  //isFavorite = input<boolean>(false);
  //toggleFavorite = output<Movie>();
  constructor(){
	effect(()=>{
		console.log("Movies",this.movies());
	});
  }
}

