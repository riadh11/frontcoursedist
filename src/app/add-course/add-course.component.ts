import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from '../models/course';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  c:Course;
  courseForm:FormGroup;
  constructor(private coursesService:CoursesService,private fb:FormBuilder) {
   
    this.courseForm=this.fb.group({
        name: '' ,
        distance: ''
        });
    }

  ngOnInit() {
   
  }
  addcourse(){
    this.c=this.courseForm.value;
    this.coursesService.addCourse(this.c).subscribe(
      res=>console.log(res)
    );
  }
  }



