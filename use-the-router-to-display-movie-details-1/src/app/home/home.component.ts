import {Component, Signal, inject } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../model/movie.model';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-home',
  imports: [MovieItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
	 protected movies: Signal<Movie[]> = inject(MoviesService).getMovies();
  	 protected favoritesService = inject(FavoritesService);

}
