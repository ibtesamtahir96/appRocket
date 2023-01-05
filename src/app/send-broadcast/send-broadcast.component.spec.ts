import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendBroadcastComponent } from './send-broadcast.component';

describe('SendBroadcastComponent', () => {
  let component: SendBroadcastComponent;
  let fixture: ComponentFixture<SendBroadcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendBroadcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
