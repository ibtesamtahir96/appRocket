import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  @Input() data;
  @Output() dataReceivedFromDialog = new EventEmitter<any>();
  groupName = '';
  selectedContacts = [];
  
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log("Contacts Data Dialogue", this.data); 
  }

  input(event){
    this.groupName = event;
    console.log("Group Name", this.groupName);
  }

  selectedContactsArray(contact,isChecked){
    console.log('Contact' , contact);
    console.log("Checkbox", isChecked);
    
    if(this.selectedContacts.length == 0){
      const obj = {
            name: contact.name,
            id: contact.id,
            isChecked: isChecked
          };
          this.selectedContacts.push(obj);
    }else{
      this.selectedContacts.forEach((selectedContact,i)=>{
        if(selectedContact.id!==contact.id){
          if(i==this.selectedContacts.length-1){
            const obj = {
              name: contact.name,
              id: contact.id,
              isChecked: isChecked
            }
            this.selectedContacts.push(obj);
          }     
        }else{
          this.selectedContacts.splice(i,1);
        }
      });
    }
    console.log("Selected COntacts", this.selectedContacts)
  }

  createGroup(){
    let array = [
      {
        contacts: this.selectedContacts,
        messages: [],
        groupName: this.groupName
      }
    ]
    console.log("Send Array", array);
    this.activeModal.close(CreateGroupComponent);
    this.dataReceivedFromDialog.emit(array);
  }

}
