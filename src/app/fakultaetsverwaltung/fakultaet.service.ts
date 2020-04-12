import { Injectable } from '@angular/core';
import {Fakultaet} from './fakultaet';

@Injectable({
  providedIn: 'root'
})
export class FakultaetService {

  private faks: Fakultaet[] = [
    {name: 'Informatik', gebaeude: 'A', kuerzel: 'I'},
    {name: 'Verfahrenstechnik', gebaeude: 'B', kuerzel: 'V'}
  ];

  constructor() { }

  getFakultaeten(): Fakultaet[] {
    return this.faks;
  }

  getFakultaet(kuerzel: string): Fakultaet | undefined {
    for (const fak of this.faks) {
      if (fak.kuerzel === kuerzel) {
        return fak;
      }
    }
    return undefined;
  }

  create(fakultaet: Fakultaet): Fakultaet {
    this.faks.push(fakultaet);
    return fakultaet;
  }

  update(fakultaet: Fakultaet): Fakultaet {
    for (const fak of this.faks) {
      if (fak.kuerzel === fakultaet.kuerzel) {
        fak.name = fakultaet.name;
        fak.gebaeude = fakultaet.gebaeude;
        fak.kuerzel = fakultaet.kuerzel;
      }
    }
    return fakultaet;
  }

  delete(fakultaetToDelete: Fakultaet): void {
    this.faks = this.faks.filter(
      (element: Fakultaet) => element.kuerzel !== fakultaetToDelete.kuerzel);
  }
}
