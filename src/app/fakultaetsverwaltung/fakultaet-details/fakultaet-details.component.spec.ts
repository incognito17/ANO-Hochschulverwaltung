import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakultaetDetailsComponent } from './fakultaet-details.component';

describe('FakultaetDetailsComponent', () => {
  let component: FakultaetDetailsComponent;
  let fixture: ComponentFixture<FakultaetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakultaetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakultaetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
