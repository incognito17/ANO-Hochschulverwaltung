import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakultaetErstellenComponent } from './fakultaet-erstellen.component';

describe('FakultaetErstellenComponent', () => {
  let component: FakultaetErstellenComponent;
  let fixture: ComponentFixture<FakultaetErstellenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakultaetErstellenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakultaetErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
