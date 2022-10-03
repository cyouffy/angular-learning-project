import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent implements OnInit {

  @Input()
  imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
