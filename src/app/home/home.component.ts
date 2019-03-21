import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {CoursesService} from '../services/courses.service';
import { User } from '../models';


@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private coursesService:CoursesService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.coursesService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }

    private loadAllUsers() {
        this.coursesService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}