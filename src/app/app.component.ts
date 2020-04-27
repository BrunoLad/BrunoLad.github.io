import { Component } from '@angular/core';
import { faChalkboardTeacher, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'App Disciplinas';
  isCollapsed: boolean;
  faChalkboardTeacher: IconDefinition = faChalkboardTeacher;

  constructor(private routerService: Router) {
    this.isCollapsed = true;
  }

  getRoute(): string {
    return this.routerService.url;
  }
}
