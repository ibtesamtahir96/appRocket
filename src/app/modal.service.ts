import { ComponentFactoryResolver, Injectable, Output, EventEmitter } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal: NgbModal,
    private componentFactoryResolver: ComponentFactoryResolver
    ) { }
    
    showFeaturedDialog(theComponent: any, data: any) {
      const componenetFactory = this.componentFactoryResolver.resolveComponentFactory(
        theComponent 
      );
  
      const modalRef = this.ngbModal.open(theComponent, {modalDialogClass: 'ag-modal'});
      modalRef.componentInstance.data = data;
      
      return modalRef;
    }
}
