import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses:any;

  constructor(private coursesService:CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }
  getCourses(){
    this.coursesService.getCourses().subscribe(
      response=>this.courses=response,
      error=>console.log(error)
    );
  }
deleteCourse(id:number){
this.coursesService.deleteCourse(id).subscribe(
  res=>this.getCourses(),
  err=>console.log(err)
);
}

}
