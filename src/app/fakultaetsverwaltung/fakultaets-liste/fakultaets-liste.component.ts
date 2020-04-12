import { Component, OnInit } from '@angular/core';
import {FakultaetService} from '../fakultaet.service';
import {Fakultaet} from '../fakultaet';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fakultaets-liste',
  templateUrl: './fakultaets-liste.component.html',
  styleUrls: ['./fakultaets-liste.component.css']
})
export class FakultaetsListeComponent implements OnInit {
  fakultaeten: Fakultaet[];
  selektierteFakultaet: Fakultaet | undefined;
  constructor(private router: Router, private fakService: FakultaetService) { }

  ngOnInit() {
    this.getFakultaeten();
  }

  getFakultaeten(): void {
    this.fakultaeten = this.fakService.getFakultaeten();
  }

  selektiereFakultaet(fak: Fakultaet): void {
    this.selektierteFakultaet = fak;
  }

  delete(fakultaet: Fakultaet): void {
    if (fakultaet) {
      if (fakultaet == this.selektierteFakultaet) {
        this.selektierteFakultaet = undefined;
      }
      this.fakService.delete(fakultaet);
      this.getFakultaeten();
    }
  }

}
