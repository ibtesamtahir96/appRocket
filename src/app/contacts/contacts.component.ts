import { SearchService } from './../search.service';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnChanges {
  @Input() searchContact;
  @Input() masterArray;
  @Output() selectedContact = new EventEmitter<any>();
  searchedContacts:any = [];
  
  constructor(private searchService: SearchService) { }

  ngOnChanges(changes: SimpleChanges): void {
    let array = this.masterArray
    this.searchedContacts = [];
    console.log("Contacts", this.masterArray)
    const result = this.searchService.search(array, this.searchContact, 'name');
    
    if(result.searchedArray.length == 0 && (this.searchContact == '' || this.searchContact == undefined)){
      return;
    }
    
    this.searchedContacts = result.searchedArray;
  }

  ngOnInit(): void {
    
  }

  selectedChat(contact){

    console.log('in contact function' , contact);
    this.selectedContact.emit(contact);
  }

}
