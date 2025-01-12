import { Routes } from '@angular/router';
import { Lesson11Component } from './lesson11/lesson11.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './lesson10/teacher/teacher/teacher.component';
import { CousresComponent } from './cousres/cousres.component';

export const routes: Routes = [
   { path:'lesson11',component:Lesson11Component},
   { path:'student',component:StudentComponent},
   { path:'teacher',component:TeacherComponent},
   { path:'courses',component:CousresComponent},
];
