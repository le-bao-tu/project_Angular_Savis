import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiWorkComponent } from './detai-work.component';

describe('DetaiWorkComponent', () => {
  let component: DetaiWorkComponent;
  let fixture: ComponentFixture<DetaiWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaiWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaiWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
