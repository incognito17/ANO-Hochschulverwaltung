import { Component, OnInit } from '@angular/core';
import {Fakultaet} from '../fakultaet';
import {FakultaetService} from '../fakultaet.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fakultaet-aendern',
  templateUrl: './fakultaet-aendern.component.html',
  styleUrls: ['./fakultaet-aendern.component.css']
})
export class FakultaetAendernComponent implements OnInit {
  fakultaet: Fakultaet | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private fakultaetService: FakultaetService) { }

  ngOnInit() {
    const snapshot = this.route.snapshot;
    const kuerzel: string = snapshot.params['kuerzel'];
    this.fakultaet = this.fakultaetService.getFakultaet(kuerzel);
  }

  update(fakultaet: Fakultaet): void {
    this.fakultaetService.update(fakultaet);
    this.router.navigate(['../../list'], {relativeTo: this.route});
  }
}
