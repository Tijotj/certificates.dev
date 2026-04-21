import {Component, inject, effect} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfiguratorService} from '../configurator.service';

@Component({
  selector: 'app-step3',
  imports: [
      CurrencyPipe,
      ReactiveFormsModule
  ],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {

  service = inject(ConfiguratorService);
  constructor(){
	effect(()=>{
		console.log('Price',this.service.currentConfig());
	});
  }
}
