import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToDuration'
})
export class MinToDurationPipe implements PipeTransform {
  transform(value: string): string {
    let hour = Number(value) / 60;
    let min = Number(value) % 60;	
    return `${Math.floor(hour)}h ${min}min`;
  }
}
