import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartExamComponent } from './smart-exam.component';

describe('SmartExamComponent', () => {
  let component: SmartExamComponent;
  let fixture: ComponentFixture<SmartExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
