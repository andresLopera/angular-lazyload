import { routingStudents } from './students.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    routingStudents
  ],
  declarations: [ListComponent]
})
export class StudentsModule { }
