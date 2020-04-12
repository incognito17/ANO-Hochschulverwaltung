import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfessorenverwaltungModule} from './professorenverwaltung/professorenverwaltung.module';
import {FakultaetsverwaltungModule} from './fakultaetsverwaltung/fakultaetsverwaltung.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { SeiteNichtGefundenComponent } from './seite-nicht-gefunden/seite-nicht-gefunden.component';
import {LogInOutModule} from './log-in-out/log-in-out.module';
import {AenderungenSpeichernModule} from './aenderungen-speichern/aenderungen-speichern.module';

@NgModule({
  declarations: [
    AppComponent,
    SeiteNichtGefundenComponent,
  ],
  imports: [
    BrowserModule,
    ProfessorenverwaltungModule,
    FakultaetsverwaltungModule,
    LogInOutModule,
    AenderungenSpeichernModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
