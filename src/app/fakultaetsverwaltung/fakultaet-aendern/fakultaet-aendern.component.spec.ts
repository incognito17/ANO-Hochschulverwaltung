import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakultaetAendernComponent } from './fakultaet-aendern.component';

describe('FakultaetAendernComponent', () => {
  let component: FakultaetAendernComponent;
  let fixture: ComponentFixture<FakultaetAendernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakultaetAendernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakultaetAendernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
