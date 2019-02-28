import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {


    /* If we want more params we just add new ones. Also pipe w/o parametr will call this function 
    with param null here as well */
    transform(value: any, limit: number) {
        if (value.length > limit ) {
            return value.substr(0, limit) + ' ...';
        }
        return value;
    }
}
