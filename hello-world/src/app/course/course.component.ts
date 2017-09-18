import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private title = 'List of Courses';
  private courses;
  isActive = false;
  private newCourse = 'Add new Course';

  onDelete(course) {
    console.log(course);
    this.courses.slice(this.courses.indexOf(course), 1);

  }
  onKeyUp() {
    this.courses.push(this.newCourse);

  }



  constructor(courseService: CourseService) {
    this.courses = courseService.getCourse();

  }

  ngOnInit() {
  }

}
