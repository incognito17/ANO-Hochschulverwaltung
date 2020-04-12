import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakultaetsListeComponent } from './fakultaets-liste/fakultaets-liste.component';
import { FakultaetDetailsComponent } from './fakultaet-details/fakultaet-details.component';
import { FakultaetErstellenComponent } from './fakultaet-erstellen/fakultaet-erstellen.component';
import { FakultaetAendernComponent } from './fakultaet-aendern/fakultaet-aendern.component';
import { FakultaetSuchenComponent } from './fakultaet-suchen/fakultaet-suchen.component';
import { FakultaetsverwaltungComponent } from './fakultaetsverwaltung/fakultaetsverwaltung.component';
import {FakultaetsverwaltungRoutingModule} from './fakultaetsverwaltung-routing/fakultaetsverwaltung-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [FakultaetsListeComponent, FakultaetDetailsComponent, FakultaetErstellenComponent,
    FakultaetAendernComponent, FakultaetSuchenComponent, FakultaetsverwaltungComponent],
  imports: [
    CommonModule, FakultaetsverwaltungRoutingModule, RouterModule, FormsModule
  ],
  exports: [FakultaetsListeComponent]
})
export class FakultaetsverwaltungModule { }
