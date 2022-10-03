import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  index: number;

  @Output()
   courseSelected = new EventEmitter<Course>();


  constructor() { }

  ngOnInit(): void {
  }

  coursSelected(){
    console.log("Course Card component cliked...");
    this.courseSelected.emit(this.course);
  }

  isImageAvaliable() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if(this.course.category === 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      'background-image': 'url('+ this.course.iconUrl +')'
    }
  }

}
