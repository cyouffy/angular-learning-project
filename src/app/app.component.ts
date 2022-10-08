import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CoursesService} from './services/courses.service';
import {AppConfig, CONFIG_TOKEN} from './config';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService,
              @Inject(CONFIG_TOKEN)private conf: AppConfig) {

  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  editCourse() {
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log("saved!")
      );
  }

}
