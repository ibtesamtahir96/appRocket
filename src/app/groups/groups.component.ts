import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  @Input() masterArray;
  constructor() { }

  ngOnInit(): void {
  }

}
