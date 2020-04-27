import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Lecture } from 'src/app/models/lecture';
import { faFlask, faCalculator, faBookReader, faSpaceShuttle, faGlobeAmericas, faUsers, faHourglassHalf, faLaptopCode, faRunning, faQuestionCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class LectureService {

  readonly LECTURES: Lecture[] = 
  [
    {
      "id": "1",
      "name": "Matemática",
      "icon": faCalculator,
      "professors": [
        {
          id: "2",
          name: "João",
          gender: "male",
        }, 
        {
          "id": "3",
          "name": "Claudia",
          "gender": "female",
        }],
    },
    {
      "id": "2",
      "name": "Português",
      "icon": faBookReader,
      "professors": [
        {
          "id": "5",
          "name": "Henrique",
          "gender": "male",
        }
      ],
    },
    {
      "id": "3",
      "name": "Física",
      "icon": faSpaceShuttle,
      "professors": [
        {
          "id": "3",
          "name": "Claudia",
          "gender": "female",
        },
      ],
    },
    {
      "id": "4",
      "name": "Geografia",
      "icon": faGlobeAmericas,
      "professors": [],
    },
    {
      "id": "5",
      "name": "Sociologia",
      "icon": faUsers,
      "professors": [
        {
          "id": "5",
          "name": "Henrique",
          "gender": "male"
        },
        {
          "id": "4",
          "name": "Julia",
          "gender": "female"
        },
        {
          "id": "1",
          "name": "Guilherme",
          "gender": "male"
        }
      ],
    },
    {
      "id": "6",
      "name": "História",
      "icon": faHourglassHalf,
      "professors": [
        {
          "id": "4",
          "name": "Julia",
          "gender": "female"
        },
        {
          "id": "1",
          "name": "Guilherme",
          "gender": "male"
        }
      ],
    },
    {
      "id": "7",
      "name": "Lógica de Programação",
      "icon": faLaptopCode,
      "professors": [
        {
          "id": "3",
          "name": "Claudia",
          "gender": "female",
        },
      ],
    },
    {
      "id": "8",
      "name": "Educação Física",
      "icon": faRunning,
      "professors": [],
    },
    {
      "id": "9",
      "name": "Filosofia",
      "icon": faQuestionCircle,
      "professors": [
        {
          "id": "1",
          "name": "Guilherme",
          "gender": "male"
        }
      ],
    },
    {
      "id": "10",
      "name": "Química",
      "icon": faFlask,
      "professors": [
        {
          id: "2",
          name: "João",
          gender: "male",
        }, 
      ],
    },
    {
      "id": "11",
      "name": "Ética",
      "icon": faCheckCircle,
      "professors": [
        {
          "id": "5",
          "name": "Henrique",
          "gender": "male",
        },
        {
          "id": "4",
          "name": "Julia",
          "gender": "female",
        },
        {
          "id": "1",
          "name": "Guilherme",
          "gender": "male",
        },
        {
          "id": "3",
          "name": "Claudia",
          "gender": "female",
        },
        {
          "id": "2",
          "name": "João",
          "gender": "male",
        }
      ],
    }
  ];

  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchAllLectures(): Observable<Lecture[]> {
    return of(this.LECTURES);
  }

  getLecture(id: string): Observable<Lecture> {
    return of(this.LECTURES.find((lecture: Lecture) => lecture.id === id));
  }
}
