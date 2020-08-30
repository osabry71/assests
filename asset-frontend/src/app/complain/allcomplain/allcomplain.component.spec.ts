import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcomplainComponent } from './allcomplain.component';

describe('AllcomplainComponent', () => {
  let component: AllcomplainComponent;
  let fixture: ComponentFixture<AllcomplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcomplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcomplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
