import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from '../../services/professor.service';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/models/professor';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.less']
})
export class ProfessorDetailsComponent implements OnInit {

  selectedProfessor$: Observable<Professor>;

  constructor(private route: ActivatedRoute,
              private professorService: ProfessorService
              ) { }

  ngOnInit(): void {
    this.selectedProfessor$ = this.getProfessor();
  }

  getProfessor(): Observable<Professor> {
    const id: string = this.route.snapshot.paramMap.get('id');
    return this.professorService.getProfessor(id);
  }

}
