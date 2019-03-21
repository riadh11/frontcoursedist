import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesService } from './services/courses.service';
import { DetailsComponent } from './details/details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { RegisterComponent } from './register/register.component';
import { AlertService } from './services/alert';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/Authentication';
import { AlertComponent } from './AlertComponent/directives.component';
import { AuthGuard } from './Guards/AuthGuard';
import { HomeComponent } from './home/home.component';
import { routing } from './app.rotig';
import { fakeBackendProvider } from './Aider/idex';

const appRoutes: Routes = [
  { path:'register' , component:RegisterComponent  },
  { path: 'login', component: LoginComponent },
  { path:'courses' , component:ListCoursesComponent  },
  { path:'courses/:id' , component:DetailsComponent  },
  { path:'addcourse' , component:AddCourseComponent  },
  { path:'updatecourse/:id' , component:UpdateCourseComponent  },
  { path:'' ,redirectTo:'/register' ,pathMatch:'full' },
  { path:'**' , redirectTo:'/login' ,pathMatch:'full'  },

];
@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    NotFoundComponent,
    DetailsComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
 
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    routing
    
  ],
  providers: [
    CoursesService,
    AlertService,
    AuthGuard ,
    AuthenticationService,
    fakeBackendProvider
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
