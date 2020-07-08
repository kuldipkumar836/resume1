import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    AcademicRoutingModule
  ]
})
export class AcademicModule { }
