import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Professor} from '../professor';

@Component({
  selector: 'app-professor-aendern',
  templateUrl: './professor-aendern.component.html',
  styleUrls: ['./professor-aendern.component.css']
})
export class ProfessorAendernComponent implements OnInit {
  professor: Professor|undefined;

  constructor(private router: Router, private route: ActivatedRoute, private professorService: ProfessorService) { }

  ngOnInit() {
    const snapshot = this.route.snapshot;
    const kuerzel: string = snapshot.params['kuerzel'];
    this.professor = this.professorService.getProfessor(kuerzel);
  }

  //queryParams ausgeben
  // console.log('VORNAME: ' + snapshot.queryParams['vorname']);

  update(professor: Professor): void {
    this.professorService.update(professor);
    this.router.navigate(['../../list'], {relativeTo: this.route});
  }
}
