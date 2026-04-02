import {Component, input, output } from '@angular/core';
import { Movie } from '../model/movie.model';
import {MillionDollarPipe} from '../pipes/million-dollar.pipe';
import {MinToDurationPipe} from '../pipes/min-to-duration.pipe';

@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4> <span [class]="isFavorite(movie().title) ? 'icon-star active' : 'icon-star'" (click)="updateFavStar(movie().title)"></span> {{ movie().title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ movie().release_date }}</span>
          <span>Budget:  {{ movie().budget | millionDollar }} </span>
          <span>Duration: {{ movie().duration | minToDuration }}</span>
        </small>
      </div>

      <button>Details</button>
    </div>
  `,
  imports: [
    MillionDollarPipe,
    MinToDurationPipe
  ],
  styleUrls: ['movie-item.component.scss']
})
export class MovieItemComponent {
  movie  = input.required<Movie>();
  favoriteMovieList = input<string[]>();
  favOrNotChosen = output<string>(); 
  updateFavStar(movieTitle: string){
	this.favOrNotChosen.emit(movieTitle);
  }
  isFavorite(movieTitle:string): boolean {
	return this.favoriteMovieList()?.includes(movieTitle) ?? false;
  }
}

