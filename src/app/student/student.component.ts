import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { log } from 'console';
import { Service } from '../services/service.service';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentDetailsComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit,AfterViewInit{
  listStudents: Student[]=[];
  constructor(private studentServive:Service){

  }
  ngAfterViewInit(): void {
    console.log("after view init");  
  }
  ngOnInit(): void {
    this.listStudents=this.studentServive.getStudents();
  }
   select:number=-1;
  //  selectAdd:number=-1;
  selectAdd=this.listStudents.length;
  s1=new Student(this.selectAdd,"","","","",false,0,new Date()); 
  delete(Id: number) {
    this.listStudents = this.listStudents.filter(x => x.id != Id)
  }
   edit(id:number){
    this.select=id;
  }
  // addStudent(id:number)
  // {
  //   if(this.selectAdd==-1)
  //   {
  //     this.selectAdd=id;
  //   }
  //   else this.selectAdd=-1;
  // }
    addStudent()
  { 
    this.s1 =new Student(++this.selectAdd,"","","","",false,0,new Date());
    // this.listStudents.push(s1)
    this.edit(this.selectAdd)
  }
  save=(event:any)=>{
    const s1=new Student
    (event.id,event.name,event.family,event.address,event.phone,event.status,0,new Date());
    this.listStudents.forEach((student,i)=>
    {
      if(student.id==s1.id)
      {this.listStudents[i]={...s1}
    }
    });
    this.listStudents.push(s1);
    console.log(this.listStudents);
    console.log(s1);
    
    
    this.select=-1
  }
}

