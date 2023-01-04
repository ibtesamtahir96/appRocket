import { CommonModule } from '@angular/common';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ModalService } from './modal.service';
import { NgbModal, NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { ButtonComponent } from './button/button.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    ButtonComponent,
    ContactsComponent,
    GroupsComponent,
    CreateGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule
  ],
  providers: [ModalService, NgbActiveModal, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
