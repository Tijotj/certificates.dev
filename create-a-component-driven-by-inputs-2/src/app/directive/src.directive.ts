import { Directive, input, output, effect } from '@angular/core';

@Directive({
	selector: '[appSourceDirective]',
})
export class SourceDirective {
	cardNumber = input<string | undefined>();	
	cardTypeDetected = output<string>();
	constructor() {
		effect(()=>{
			const val = String(this.cardNumber() ?? '');
			console.log("card number", this.cardNumber());
			if(val.startsWith('30')){
				this.cardTypeDetected.emit('mastercard');
			} else if(val.startsWith('40')) {
				this.cardTypeDetected.emit('visa');
			} else {
				this.cardTypeDetected.emit('others');
			}	
		});
	}
}
