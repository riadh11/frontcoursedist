import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient:HttpClient,
              private http: HttpClient) {}
              
register(user: User) {
  return this.http.post('/users/register', user);
}
              

  getCourses(){
    return this.httpClient.get('http://localhost:9090/Corse');
  }
  getCourse(id:number){
    return this.httpClient.get('http://localhost:9090/Corse/'+id);
  }
  addCourse(course:Course){
    return this.httpClient.post('http://localhost:9090/Corse',course);

  }
  deleteCourse(id:number){
    return this.httpClient.delete('http://localhost:9090/Corse/'+id);

  }
  updateCourse(course:Course){
    return this.httpClient.put('http://localhost:9090/Corse',course);

  }
  getAll() {
    return this.http.get<User[]>(`/users`);
}

getById(id: number) {
    return this.http.get(`/users/` + id);
}


update(user: User) {
    return this.http.put(`/users/` + user.id, user);
}

delete(id: number) {
    return this.http.delete(`/users/` + id);
}
}

