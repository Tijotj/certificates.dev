import {Component, inject,  OnDestroy } from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {HighlightDirective} from '../highlight.directive';
import {MovieItemComponent} from '../movie-item/movie-item.component';
import {Movie} from '../model/movie.model';
import {MoviesService} from '../services/movies.service';
import {FavoritesService} from '../services/favorites.service';
import {Observable, Subscription, tap, switchMap } from 'rxjs';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
      HighlightDirective,
      MovieItemComponent,
      AsyncPipe,
      ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy {
  protected movies$: Observable<Movie[]> = inject(MoviesService).getMovies();
  protected favoritesService = inject(FavoritesService);
  searchForm = new FormGroup({
	title:  new FormControl(''),
  	releaseDate:  new FormControl('')
  });
  protected filtered = inject(MoviesService);
  private subscriptions: Subscription[] = [];

   constructor(){
	const sub = this.searchForm.valueChanges.pipe(
		tap((data)=>console.log(data))
        ).subscribe({
                next: (val) => {
				const valTitle = val.title ? val.title.toLowerCase() : '';
				const valRelease = val.releaseDate ? String(val.releaseDate) : ''; 
				this.movies$ = this.filtered.filterMovieList(valTitle,valRelease);
				const sub2 = this.movies$.subscribe({
					next: (data) => console.log(data) 
				});
				this.subscriptions.push(sub2);	
			} 
        });
        this.subscriptions.push(sub);
   } 

  ngOnDestroy() {
	this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
