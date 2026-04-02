import { Component } from '@angular/core';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { Movie } from './model/movie.model';
import { SourceDirective} from './directive/src.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent,SourceDirective, FormsModule 
  ]
})
export class AppComponent {
  cardNumberValue: string = "";
  movie: Movie = {
    "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
    "title": "Harry Potter and the Philosopher's Stone",
    "duration": 152,
    "budget": 125,
    "release_date": "2001-11-04"
  };
  imgSrcUrl: string = "";
	updateImgSource(imgSrc: string) {
		if(imgSrc == "mastercard")
			this.imgSrcUrl = "https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png";
		else if(imgSrc == "visa")	
			this.imgSrcUrl = "https://www.citypng.com/public/uploads/preview/hd-visa-payment-logo-png-7017516947777256ndfrewd52.png";
		else
			this.imgSrcUrl = "https://www.shutterstock.com/shutterstock/photos/542784994/display_1500/stock-photo-debit-card-isolated-on-a-white-background-this-is-a-mock-generic-safe-to-publish-debit-card-542784994.jpg";	
	}
}
