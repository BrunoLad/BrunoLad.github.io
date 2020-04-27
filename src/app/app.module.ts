import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfessorComponent } from './professor/components/professor.component';
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfessorDetailsComponent } from './professor/components/professor-details/professor-details.component';
import { LecturesListComponent } from './lecture/components/lectures-list/lectures-list.component';
import { LectureDetailComponent } from './lecture/components/lecture-detail/lecture-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorComponent,
    ProfessorDetailsComponent,
    LecturesListComponent,
    LectureDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
