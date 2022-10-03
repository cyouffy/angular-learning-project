import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  @ViewChild('container')
  container: ElementRef;

  OnCoursSelected(course: Course) {
    console.log(this.container);
  }

}
