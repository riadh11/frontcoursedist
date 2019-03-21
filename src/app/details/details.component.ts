import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
course:any;
id:number;
  constructor(private coursesService:CoursesService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.router.snapshot.params['id'];
    this.coursesService.getCourse(this.id).subscribe(
      resp=>this.course=resp,
      err=>console.log(err)

    );
  }

}
