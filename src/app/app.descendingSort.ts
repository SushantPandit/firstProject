import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descendingSort'
})

export class SortDescending implements PipeTransform {
    transform(value : any[], args: string):any {
        
            return value.sort().reverse();
        
    }
}