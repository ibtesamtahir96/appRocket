import { SendBroadcastComponent } from './send-broadcast/send-broadcast.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ModalService } from './modal.service';
import { SearchService } from './search.service';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'appRocket';
  searchedName: string;
  name="New Group"
  chatName;
  messageArray;
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
    this.searchedName = event;
  }
  
  openGroupDialog(){
    const modalRef = this.customModel.showFeaturedDialog(CreateGroupComponent, this.contacts);
    modalRef.componentInstance.dataReceivedFromDialog.subscribe((receivedData) => {  
      console.log("Received Dataaaaaaaaaaaaaa",receivedData);
      
      let copyGroups = [...this.groups];
      copyGroups.push(receivedData[0]);
      this.groups = copyGroups;
      console.log("Groups Array", this.groups);
    });  
  }
  openBroadcastDialog(){
    const modalRef = this.customModel.showFeaturedDialog(SendBroadcastComponent, '');
    modalRef.componentInstance.dataReceivedFromDialog.subscribe((receivedData) => {  
      console.log("Received Dataaaaaaaaaaaaaa",receivedData);

      this.contacts.forEach((contact,index) => {
        contact.messages.push({
          id : index,
          message : receivedData
        });
      });
      
      console.log("Contact Messages", this.contacts);
    }); 
  }

  chat(event){
    this.chatName = event;
    console.log("Chat",this.chatName.messages);
  }

  textAreaData(text){
    console.log("Messsage Box Main Page", text)
    this.chatName.messages.push({
      id : this.chatName.messages.length,
      message : text
    })
  }
}
