import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ascendingSort'
})

export class SortPipe implements PipeTransform {
    transform(value: any[], args: string): any {
        // if (args === 'ascending') {
            console.log(args);
            console.log(value);
            return value.sort();
        // } 
    }
}
