import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
	http = inject(HttpClient);
	getRandomWord(): Observable<string> {
		return this.http.get('assets/words',{ responseType: 'text'}).pipe(
			map(data => {
				const words = data.split('\n');
				return words[Math.floor(Math.random() * words.length)]; 
			})
		) 
	}	
}
