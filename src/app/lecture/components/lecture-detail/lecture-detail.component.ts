import { Component, OnInit } from '@angular/core';
import { Lecture } from 'src/app/models/lecture';
import { Observable } from 'rxjs';
import { LectureService } from '../../services/lecture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.less']
})
export class LectureDetailComponent implements OnInit {

  selectedLecture$: Observable<Lecture>;

  constructor(
    private lectureService: LectureService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getLecture();
  }

  getLecture(): void {
    const id: string = this.route.snapshot.paramMap.get("id");
    this.selectedLecture$ = this.lectureService.getLecture(id);
  }

}
