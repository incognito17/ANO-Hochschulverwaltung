import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfessorenListeComponent} from '../professorenverwaltung/professoren-liste/professoren-liste.component';
import {ProfessorErstellenComponent} from '../professorenverwaltung/professor-erstellen/professor-erstellen.component';
import {ProfessorAendernComponent} from '../professorenverwaltung/professor-aendern/professor-aendern.component';
import {SeiteNichtGefundenComponent} from '../seite-nicht-gefunden/seite-nicht-gefunden.component';
// tslint:disable-next-line:max-line-length
import {ProfessorenverwaltungRoutingModule} from '../professorenverwaltung/professorenverwaltung-routing/professorenverwaltung-routing.module';
import {FakultaetsverwaltungRoutingModule} from '../fakultaetsverwaltung/fakultaetsverwaltung-routing/fakultaetsverwaltung-routing.module';

const routes: Routes = [
  {path: '', redirectTo: 'professor', pathMatch: 'full'},
  {path: '**', component: SeiteNichtGefundenComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes), ProfessorenverwaltungRoutingModule,
    FakultaetsverwaltungRoutingModule
  ]
})
export class AppRoutingModule { }
