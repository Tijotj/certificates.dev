import { Component, input, Signal } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-movie-item',
  template: `
  @for(item of movie();track item.title){
   <div class="movie-item">
      <div>
        <h4>{{ item.title }}</h4>
        <small class="subtitle">
          <span>Release date: {{ item.release_date }}</span>
          <span>Budget: $ {{ item.budget }} million</span>
          <span>Duration: {{ item.duration }} min</span>
        </small>
      </div>
      <button>Details</button>
    </div>
  }
  `,
  styleUrls: ['movie-item.component.scss']
})
export class MovieItemComponent {
  movie = input.required<Movie[]>();
}

