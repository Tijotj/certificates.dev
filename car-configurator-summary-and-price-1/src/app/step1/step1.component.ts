import {Component, inject, effect } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfiguratorService} from '../configurator.service';

@Component({
  selector: 'app-step1',
  imports: [
      ReactiveFormsModule
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  service = inject(ConfiguratorService);
  constructor(){
	effect(()=>{
		console.log("Select color",this.service.currentColor());
	});
  }
}
