import { Component, OnInit } from '@angular/core';
import {Fakultaet} from '../fakultaet';
import {ActivatedRoute, Router} from '@angular/router';
import {FakultaetService} from '../fakultaet.service';

@Component({
  selector: 'app-fakultaet-erstellen',
  templateUrl: './fakultaet-erstellen.component.html',
  styleUrls: ['./fakultaet-erstellen.component.css']
})
export class FakultaetErstellenComponent implements OnInit {

  fakultaet: Fakultaet = new Fakultaet();
  constructor(private router: Router, private route: ActivatedRoute, private fakultaetService: FakultaetService) { }

  ngOnInit() {
  }

  save(fakultaet: Fakultaet): void {
    this.fakultaetService.create(fakultaet);
    this.router.navigate(['../list'], {relativeTo: this.route});
  }
}
