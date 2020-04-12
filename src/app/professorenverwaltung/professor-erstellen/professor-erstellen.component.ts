import { Component, OnInit } from '@angular/core';
import {Professor} from '../professor';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfessorService} from '../professor.service';

@Component({
  selector: 'app-professor-erstellen',
  templateUrl: './professor-erstellen.component.html',
  styleUrls: ['./professor-erstellen.component.css']
})
export class ProfessorErstellenComponent implements OnInit {

  professor: Professor = new Professor();
  constructor(private router: Router, private route: ActivatedRoute, private professorservice: ProfessorService) { }

  ngOnInit() {
  }

  save(professor: Professor): void {
    this.professorservice.create(professor);
    this.router.navigate(['../list'], {relativeTo: this.route});
  }
}
