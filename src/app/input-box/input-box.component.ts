import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Input() label: string;
  @Input() width: string;
  @Input() height : string;
  @Input() placeHolder : string = ' '
  @Output() inputChanged : EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  inputChange(event){
    this.inputChanged.emit(event.target.value);
  }

}
