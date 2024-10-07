import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},

    // Without lazy loading
    // {path: 'about', component: AboutComponent},

    // With Lazy Loading
    {path: 'about', loadComponent: () => import('./components/about/about.component').then(mod=> mod.AboutComponent)},
    {path: '', redirectTo:'/login', pathMatch:"full"},

    // wild card
    {path: '**', component:NotFoundComponent}
];
