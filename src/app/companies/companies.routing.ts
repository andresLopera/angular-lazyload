import { ListComponent } from './list/list.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{
        path: '',
        component : ListComponent
    }];

export const routingCompanies: ModuleWithProviders = RouterModule.forChild(appRoutes);