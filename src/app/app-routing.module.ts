import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorComponent } from './professor/components/professor.component';
import { ProfessorDetailsComponent } from './professor/components/professor-details/professor-details.component';
import { LecturesListComponent } from './lecture/components/lectures-list/lectures-list.component';
import { LectureDetailComponent } from './lecture/components/lecture-detail/lecture-detail.component';


const routes: Routes = [
  {path: "professors", component: ProfessorComponent},
  {path: "professor/:id", component: ProfessorDetailsComponent},
  {path: "lectures", component: LecturesListComponent},
  {path: "lecture/:id", component: LectureDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
