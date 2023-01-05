import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit, OnChanges {
  @Input() masterArray;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Groups Array from Group Component On Changes", this.masterArray)
  }

  ngOnInit(): void {
    console.log("Groups Array from Group Component", this.masterArray)
  }

}
