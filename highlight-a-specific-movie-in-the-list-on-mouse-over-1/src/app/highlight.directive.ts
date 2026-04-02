import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
	@HostBinding('class.highlight') className:boolean;   

	@HostListener('mouseenter') onMouseEnter(){
		this.className = true;
	} 	

	@HostListener('mouseleave') onMouseLeave(){
		this.className = false;
	}
}
