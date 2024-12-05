import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  @Input()
  currentStudent!: Student;

  @Output() newStudent:EventEmitter<any>=new EventEmitter<any>()
  saveData(id:number,name:string,family:string,address:string,phone:string)
  {
   const s1=new Student(id,name,family,address,phone,false,0,new Date());
    this.newStudent.emit(s1);
  }
}
