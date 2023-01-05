import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
    constructor(){}
    
    ngOnInit(): void {}

    search(array, term, field = null){
        let newArray = [];
        if(term){
            term.trim();
        }
        if(!term || term ==''){
            return {
                originalArray : array,
                searchedArray : []
            }
        }
        array.forEach(item =>{
            if(!field){
                if(item.toLowerCase().search(term.toLowerCase()) !== -1){
                    newArray.push(item)
                }
                return;
            }
            if(item[field].toLowerCase().search(term.toLowerCase()) !== -1){
                newArray.push(item);
            }
        }); 
        return {
            originalArray : array,
            searchedArray : newArray
        }
    }
}
