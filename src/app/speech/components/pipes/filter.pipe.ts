import { Pipe, PipeTransform } from '@angular/core';
import { Speech } from '../../models/speech.model';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Speech[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        console.log(items);
        searchText = searchText.toLowerCase();
        return items.filter(it => {     
            if( it.text.toLowerCase().includes(searchText) )
                return  it.text.toLowerCase().includes(searchText)
            else 
                return it.keywords ? it.keywords.toLowerCase().includes(searchText) : null;
        });
    }
}