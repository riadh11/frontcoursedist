import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient:HttpClient) { }

  getCourses(){
    return this.httpClient.get('http://localhost:8080/Corse');
  }
}
