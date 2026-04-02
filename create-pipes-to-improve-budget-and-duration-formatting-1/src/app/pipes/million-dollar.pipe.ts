import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar'
})
export class MillionDollarPipe implements PipeTransform {
  transform(value: string): string {
// step 1
/*    const arr = value.split("");
    const ind = arr.indexOf('-');
    let sub1, sub2; 
    if(ind != -1){
	sub1 = arr.slice(0,ind); 	
  	sub2 = arr.slice(ind+1,arr.length); 
	return `$${sub1.join("")} to $${sub2.join("")}`;
    } else   
    	return `$${value}`;
  
*/
// step 2
	const arr = value.split("-");
	if(arr.length > 1){
		return `$${arr[0]} to $${arr[1]}`;
	} else {
		return `$${arr[0]}`;
	}			
  }
}
