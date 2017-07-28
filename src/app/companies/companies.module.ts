import { routingCompanies } from './companies.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    routingCompanies
  ],
  declarations: [ListComponent]
})
export class CompaniesModule { }
