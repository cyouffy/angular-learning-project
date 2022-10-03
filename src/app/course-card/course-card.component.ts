import { outputAst } from '@angular/compiler';
import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
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

  @Input()
  noImageTpl: TemplateRef<any>;

  @Output()
   coursesSelected = new EventEmitter<Course>();


  constructor() { }

  ngOnInit(): void {
  }

  courseSelected(){
    console.log("Course Card component cliked...");
    this.coursesSelected.emit(this.course);
  }

  isImageAvailable() {
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
