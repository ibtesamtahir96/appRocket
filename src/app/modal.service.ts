import { ComponentFactoryResolver, Injectable, Output, EventEmitter } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal: NgbModal,
    private componentFactoryResolver: ComponentFactoryResolver
    ) { }
    showDefaultModalComponent(theComponent: any) {
      const componenetFactory = this.componentFactoryResolver.resolveComponentFactory(
        theComponent
      );
      const modalRef = this.ngbModal.open(theComponent);
      modalRef.closed.subscribe(() =>{
        console.log('event close');
      })
      return modalRef;
    }
  
    showFeaturedDialog(theComponent: any, employee: any , data = null) {
      const componenetFactory = this.componentFactoryResolver.resolveComponentFactory(
        theComponent 
      );
  
      const modalRef = this.ngbModal.open(theComponent, {modalDialogClass: 'ag-modal'});
      modalRef.componentInstance.data = employee;
      modalRef.componentInstance.dates = data;
      modalRef.componentInstance.modelData = data;

      // modalRef.componentInstance.dataReceivedFromDialog.subscribe((receivedData) => {
      //   console.log("Received Data",receivedData);
      // })
      
      return modalRef;
    }
}
