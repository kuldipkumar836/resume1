import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhamalMusicComponent } from './dhamal-music.component';

describe('DhamalMusicComponent', () => {
  let component: DhamalMusicComponent;
  let fixture: ComponentFixture<DhamalMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhamalMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhamalMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
