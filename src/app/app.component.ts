import { SearchService } from './search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appRocket';
  searchValue;
  name="New Group"
  contacts = [
    {
      name : 'ibtesam' , 
      id : 20
    },
    {
      name : 'inzamam',
      id : 10
    },
    {
      name : 'ihtisham' , 
      id : 11
    },
    {
      name : 'hassan' , 
      id : 11
    }
  ];

  groups = [
    {
      contacts : [],
      messages: [],
      groupName: ''
    }
  ]

  constructor(private searchText: SearchService){

  }

  search(event){
    console.log("Typed Text", event);
    this.searchValue = event;
  }
  openGroupDialogue(){
    debugger;
    //pass Array of Contacts to the dialogue
  }
}
