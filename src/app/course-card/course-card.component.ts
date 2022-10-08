import {Attribute, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(@Attribute('type') private type: string) {
      console.log(type);
    }

    ngOnInit() {

    }

    onTitleChange(newTitle:string) {
      this.course.description = newTitle;
    }

    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
