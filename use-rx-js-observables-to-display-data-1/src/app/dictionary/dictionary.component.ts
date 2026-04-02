import { Component, inject, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-dictionary',
  imports: [],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss',
})
export class DictionaryComponent implements OnInit {
	dictServ = inject(DictionaryService);
	word : string = "";
	ngOnInit():void {
		this.getWordOfTheDay();	
	}
	getWordOfTheDay(){
		this.dictServ.getRandomWord().pipe(
			tap((data)=>console.log(data))	
		).subscribe({
                        next: (res:string) => {
                                this.word = res;
                                console.log("Word of the day: ", this.word);
                        }
                });
	}
}
