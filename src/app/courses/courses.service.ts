import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private http: HttpClient) { }

  loadCourses(): Observable<Course[]> {
    const param = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

    return this.http.get<Course[]>('/api/courses', {params: param});
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders()
      .set("X-Auth", "user-Id");
    return this.http.put(`/api/courses/${course.id}`, course, {headers: headers});
  }

}
