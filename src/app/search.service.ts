import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  array = [
    {
      name : 'Farhan' , 
      id : 20
    },
    {
      name : 'zeeshan',
      id : 10
    },
    {
      name : 'zahid' , 
      id : 11
    },
    {
      name : 'irfan',
      id : 22
    },
    {
      name : 'Faizan',
      id : 20
    }
  ]
  term = 'i';
  noValueFound: Boolean = false;
    constructor(){}
    
    ngOnInit(): void {
        this.search(this.array, this.term);
    }


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
