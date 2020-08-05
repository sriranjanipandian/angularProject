import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';

const routes: Routes = [{path:'course',component:CourseComponent},{path:'student',component:StudentComponent},{path:'staff',component:StaffComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
