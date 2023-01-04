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
      setTimeout(() => {
        this.groups.push(receivedEntry);
      }, 1000);
      
    });

    console.log("Groups Array", this.groups);
    
  }
}
