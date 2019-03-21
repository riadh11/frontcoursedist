import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  c:Course; 
  id:number;
  courseForm:FormGroup;
  constructor(private coursesService: CoursesService ,private fb:FormBuilder,private router:ActivatedRoute) {
    this.c=new Course(null,"",null,[]);
    this.courseForm=this.fb.group({
      // this.courseForm= new FormGroup({
         name: '' ,
         distance: ''
         });
  }

  ngOnInit() {
    this.id=this.router.snapshot.params['id'];
    this.coursesService.getCourse(this.id).subscribe(
      resp=>this.c=resp,
      err=>console.log(err)

    );
  }
  updateCourse(){
    this.c=this.courseForm.value;
    this.c.id=this.id;
    this.coursesService.updateCourse(this.c).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    );
  }

}
