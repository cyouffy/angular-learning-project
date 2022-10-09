import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, OnChanges, OnInit} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CoursesService} from './courses/courses.service';
import {AppConfig, CONFIG_TOKEN} from './config';
import {Observable} from 'rxjs';
import {createCustomElement} from '@angular/elements';
import {CourseTitleComponent} from './course-title/course-title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {

  courses = COURSES;
  coursesTotal = this.courses.length;
  loaded = false;

  constructor(private coursesService: CoursesService,
              @Inject(CONFIG_TOKEN)private conf: AppConfig,
              private cd: ChangeDetectorRef,
              private injector: Injector) {

  }

  ngDoCheck() {
    if (this.loaded) {
      this.cd.markForCheck()
    }
  }

  ngOnInit() {

    const htmlElement = createCustomElement(CourseTitleComponent, {"injector": this.injector});
    customElements.define('course-title', htmlElement);

    // this.coursesService.loadCourses().subscribe(
    //   courses => {
    //     this.courses = courses;
    //     this.loaded = true;
    //   }
    // );
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
