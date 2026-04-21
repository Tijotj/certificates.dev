import {Component, inject, OnInit, ElementRef, viewChild, computed, effect} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfiguratorService} from '../configurator.service';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step1',
  imports: [
      ReactiveFormsModule
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit {
  service = inject(ConfiguratorService);
  highlightCar = viewChild<ElementRef<HTMLInputElement>>('model');
  hCar = computed(()=>this.service.currentCar()?.code);
  carModelGroup = new FormGroup({
	chooseModel : new FormControl(),
	chooseColor : new FormControl()
  });
  constructor(){
	effect(()=>{
		console.log("Current Car: ",this.hCar());
		console.log("CurrentCar Info: ",this.service.currentCar());
	});
  }
  ngOnInit():void {
	this.service.currentTowHitchIsSelected.set(false);
 	const savedModel = this.service.currentCar();
	const savedColor = this.service.currentColor();
	if(savedModel){
		this.carModelGroup.patchValue({chooseModel: savedModel.code});
	} 
	if(savedColor){
		this.carModelGroup.patchValue({chooseColor: savedColor.code});
	}
  }
}
