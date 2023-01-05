import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-broadcast',
  templateUrl: './send-broadcast.component.html',
  styleUrls: ['./send-broadcast.component.css']
})
export class SendBroadcastComponent implements OnInit {
  @Output() dataReceivedFromDialog = new EventEmitter<any>();
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  textAreaData(event){
    console.log("Text Area", event);
    this.activeModal.close(SendBroadcastComponent);
    this.dataReceivedFromDialog.emit(event);
  }

}
