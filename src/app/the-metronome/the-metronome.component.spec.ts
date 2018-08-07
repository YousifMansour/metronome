import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheMetronomeComponent } from './the-metronome.component';

describe('TheMetronomeComponent', () => {
  let component: TheMetronomeComponent;
  let fixture: ComponentFixture<TheMetronomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheMetronomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheMetronomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
