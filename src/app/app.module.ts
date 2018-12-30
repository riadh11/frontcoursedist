import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesService } from './services/courses.service';

const appRoutes: Routes = [
  { path:'courses' , component:ListCoursesComponent  },
  { path:'' ,redirectTo:'/courses' ,pathMatch:'full' },
  { path:'**' , redirectTo:'/courses' ,pathMatch:'full'  },

];
@NgModule({
  declarations: [
    AppComponent,
    ListCoursesComponent,
    NotFoundComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
