import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakultaetsListeComponent } from './fakultaets-liste.component';

describe('FakultaetsListeComponent', () => {
  let component: FakultaetsListeComponent;
  let fixture: ComponentFixture<FakultaetsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakultaetsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakultaetsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
