import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { Observable, of } from 'rxjs';
import { ProfessorService } from '../services/professor.service';
import { faUserGraduate, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.less']
})
export class ProfessorComponent implements OnInit {

  professors$: Observable<Professor[]>;
  readonly faUserGraduate: IconDefinition = faUserGraduate;

  constructor(
    private professorService: ProfessorService,
  ) { }

  ngOnInit(): void {
    this.fetchAllProfessors();
  }

  getProfessorTitle(professor: Professor): string {
    const title = `${professor.gender === 'male' ? "Professor" : "Professora"} ${professor.name}`;

    return title;
  }

  fetchAllProfessors(): void {
    this.professors$ = this.professorService.fetchAllProfessors();
  }

}
