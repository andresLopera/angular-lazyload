import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{
    path: '',
    redirectTo : 'login',
    pathMatch : 'full'
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'home',
        component: HomeComponent,
        children: [{
            path: 'students',
            loadChildren: '../students/students.module#StudentsModule'
        }, {
            path: 'companies',
            loadChildren: '../companies/companies.module#CompaniesModule'
        }]
    }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);