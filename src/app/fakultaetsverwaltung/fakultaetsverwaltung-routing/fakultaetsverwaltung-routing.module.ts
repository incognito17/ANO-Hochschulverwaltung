import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FakultaetsverwaltungComponent} from '../fakultaetsverwaltung/fakultaetsverwaltung.component';
import {FakultaetsListeComponent} from '../fakultaets-liste/fakultaets-liste.component';
import {FakultaetErstellenComponent} from '../fakultaet-erstellen/fakultaet-erstellen.component';
import {ProfessorAendernComponent} from '../../professorenverwaltung/professor-aendern/professor-aendern.component';
import {FakultaetAendernComponent} from '../fakultaet-aendern/fakultaet-aendern.component';

const routes: Routes = [
  {
    path: 'fakultaet',
    component: FakultaetsverwaltungComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: FakultaetsListeComponent},
      {path: 'create', component: FakultaetErstellenComponent},
      {path: 'edit/:kuerzel', component: FakultaetAendernComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class FakultaetsverwaltungRoutingModule { }
