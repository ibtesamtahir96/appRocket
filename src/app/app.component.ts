import { CreateGroupComponent } from './create-group/create-group.component';
import { ModalService } from './modal.service';
import { SearchService } from './search.service';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
      id : 20,
      messages : [
        {
          id : 1,
          message : "Welcome Abroad"
        } , 
        {
          id : 2 , 
          message : 'AppRocket is awesome company !)'
        }
      ]

    },
    {
      name : 'inzamam',
      id : 10,
      messages : [
        {
          id : 1,
          message : "Welcome Abroad message no 2"
        } , 
        {
          id : 2 , 
          message : 'Im leaving Pakistan forever !)'
        }
      ]
    },
    {
      name : 'ihtisham' , 
      id : 11 , 
      messages : []
    },
    {
      name : 'hassan' , 
      id : 11,
      messages : []
    }
  ];

  groups = [];

  constructor(private searchText: SearchService,
    public activeModal: NgbActiveModal,
    private customModel:ModalService,
    ){}

  search(event){
    console.log("Typed Text", event);
    this.searchValue = event;
  }
  openGroupDialogue(){
    debugger;
    //pass Array of Contacts to the dialogue
  }
  createGroup(){
    const modalRef = this.customModel.showFeaturedDialog(CreateGroupComponent, this.contacts);
    modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {  
      console.log("Received Dataaaaaaaaaaaaaa",receivedEntry);
      this.groups.push(receivedEntry[0]);
      console.log("Groups Array", this.groups);
    });

    
    
  }
}
