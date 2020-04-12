import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakultaetSuchenComponent } from './fakultaet-suchen.component';

describe('FakultaetSuchenComponent', () => {
  let component: FakultaetSuchenComponent;
  let fixture: ComponentFixture<FakultaetSuchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakultaetSuchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakultaetSuchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
