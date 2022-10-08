import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnChanges, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit, DoCheck {

  courses: Course[];
  loaded = false;

  constructor(private coursesService: CoursesService,
              @Inject(CONFIG_TOKEN)private conf: AppConfig,
              private cd: ChangeDetectorRef) {

  }

  ngDoCheck() {
    if (this.loaded) {
      this.cd.markForCheck()
    }
  }

  ngOnInit() {
    this.coursesService.loadCourses().subscribe(
      courses => {
        this.courses = courses;
        this.loaded = true;
      }
    );
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
