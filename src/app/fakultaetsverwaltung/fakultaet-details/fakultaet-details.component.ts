import {Component, Input, OnInit} from '@angular/core';
import {Fakultaet} from '../fakultaet';

@Component({
  selector: 'app-fakultaet-details',
  templateUrl: './fakultaet-details.component.html',
  styleUrls: ['./fakultaet-details.component.css']
})
export class FakultaetDetailsComponent implements OnInit {
@Input() fakultaet: Fakultaet;
  constructor() { }

  ngOnInit() {
  }

}
