import { Component, OnInit } from '@angular/core';
import { LectureService } from '../../services/lecture.service';
import { Observable } from 'rxjs';
import { Lecture } from 'src/app/models/lecture';

@Component({
  selector: 'app-lectures-list',
  templateUrl: './lectures-list.component.html',
  styleUrls: ['./lectures-list.component.less']
})
export class LecturesListComponent implements OnInit {

  lectures$: Observable<Lecture[]>;

  constructor(private lectureService: LectureService) { }

  ngOnInit(): void {
    this.fetchAllLectures();
  }

  fetchAllLectures(): void {
    this.lectures$ = this.lectureService.fetchAllLectures();
  }

}
