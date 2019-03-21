import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

import { RegisterComponent } from './register';
import { AuthGuard } from './Guards/AuthGuard';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component:LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);