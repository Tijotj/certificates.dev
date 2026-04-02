import {Injectable, signal} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
	favMovieList = signal<string[]>([]); 

	toggleFavorite(movieTitle: string) {
		if(this.favMovieList().includes(movieTitle)){
                	this.favMovieList().splice(this.favMovieList().indexOf(movieTitle),1);
        	}
        	else {
                	this.favMovieList().push(movieTitle);
        	}			
	}
}
