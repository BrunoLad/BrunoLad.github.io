import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Professor } from "../../models/professor";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  readonly PROFESSORS: Professor[] = [
    {
        "id": "1",
        "name": "Guilherme",
        "gender": "male",
        "imagePath": "../../../assets/imgs/maleProfessor.jpg",
        "lectures": [
          {
            "id": "5",
            "name": "Sociologia",
          },
          {
            "id": "6",
            "name": "História",
          },
          {
            "id": "9",
            "name": "Filosofia",
          },
          {
            "id": "11",
            "name": "Ética",
          },
        ],
      },
      {
        "id": "2",
        "name": "João",
        "gender": "male",
        "imagePath": "../../../assets/imgs/maleProfessor.jpg",
        "lectures": [
          {
            "id": "1",
            "name": "Matemática",
          },
          {
            "id": "10",
            "name": "Química",
          },
          {
            "id": "11",
            "name": "Ética",
          },
        ],
      },
      {
        "id": "3",
        "name": "Claudia",
        "gender": "female",
        "imagePath": "../../../assets/imgs/femaleProfessor.png",
        "lectures": [
          {
            "id": "1",
            "name": "Matemática",
          },
          {
            "id": "3",
            "name": "Física",
          },
          {
            "id": "7",
            "name": "Lógica de Programação",
          },
          {
            "id": "11",
            "name": "Ética",
          }
        ],
      },
      {
        "id": "4",
        "name": "Julia",
        "gender": "female",
        "imagePath": "../../../assets/imgs/femaleProfessor.png",
        "lectures": [
          {
            "id": "5",
            "name": "Sociologia",
          },
          {
            "id": "6",
            "name": "História",
          },
          {
            "id": "11",
            "name": "Ética",
          }
        ],
      },
      {
        "id": "5",
        "name": "Henrique",
        "gender": "male",
        "imagePath": "../../../assets/imgs/maleProfessor.jpg",
        "lectures": [
          {
            "id": "2",
            "name": "Português",
          },
          {
            "id": "5",
            "name": "Sociologia",
          },
          {
            "id": "11",
            "name": "Ética"
          }
        ],
      },
    ];

  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchAllProfessors(): Observable<Professor[]> {
    return of(this.PROFESSORS);
  }

  getProfessor(id: string): Observable<Professor> {
    return of(this.PROFESSORS.find((professor: Professor) => professor.id === id));
  }
}
