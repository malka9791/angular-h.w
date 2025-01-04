import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule,ValidationErrors,ValidatorFn } from '@angular/forms';
import { Schedule } from '../models/schedule';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-lesson11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lesson11.component.html',
  styleUrl: './lesson11.component.css'
})
export class Lesson11Component implements OnInit{
useForm!:FormGroup;
hour = new FormControl(0)
dayOfWeek = new FormControl(0)
teachers:string[]=[];
classes:string[]=[];
constructor(private s:ScheduleService,private fb:FormBuilder) {
  this.useForm=this.fb.group({
    details:this.fb.group({
    class1:[''],
    dayOfWeek:[0,dayValidator()],
    teacher:[''],
    hour:[0,hourValidator()]
  }),
  })
}
ngOnInit(): void {
  this.classes=this.s.getClasses();
  this.teachers=this.s.getTeachers();
}
onSubmit()
{
  this.s.addToSchedule(this.useForm.value)
  
}
}

function hourValidator(): ValidatorFn {//the validation doesnot works
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    return (isNaN(value) || value === null || value === '' || value < 0 || value > 24)
      ? { correctHour: false }
      : null;
  };
}
function dayValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;    
    return (isNaN(value) || value === null || value === '' || value < 0 || value > 6)
      ? { correctDay: false }
      :null ;
  };
}
