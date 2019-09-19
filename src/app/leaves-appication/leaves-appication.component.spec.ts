import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesAppicationComponent } from './leaves-appication.component';

describe('LeavesAppicationComponent', () => {
  let component: LeavesAppicationComponent;
  let fixture: ComponentFixture<LeavesAppicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavesAppicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesAppicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
