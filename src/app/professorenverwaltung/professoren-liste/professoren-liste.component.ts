import { Component, OnInit } from '@angular/core';
import {ProfessorService} from '../professor.service';
import {Professor} from '../professor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-professoren-liste',
  templateUrl: './professoren-liste.component.html',
  styleUrls: ['./professoren-liste.component.css']
})
export class ProfessorenListeComponent implements OnInit {
  professoren: Professor[];
  selektierterProfessor: Professor | undefined;
  constructor(private router: Router, private professorService: ProfessorService) { }

  ngOnInit() {
    this.getProfessoren();
  }

  getProfessoren(): void {
    this.professoren = this.professorService.getProfessoren();
  }

  selektiereProfessor(prof: Professor): void {
    this.selektierterProfessor = prof;
  }

  delete(professor: Professor): void {
    if (professor) {
      if (professor == this.selektierterProfessor) {
        this.selektierterProfessor = undefined;
      }
      this.professorService.delete(professor);
      this.getProfessoren();
    }
  }

}
