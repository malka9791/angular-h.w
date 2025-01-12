import { Injectable } from '@angular/core';
import { scheduler } from 'timers/promises';
import { Schedule } from '../../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { 
  }
  private classes:string[]=['a1','a2','b1','b2']
  private teachers:string[]=['chya','bracha','lea','malka']
  private Schedule1:Schedule[]=[
    
  ]
  getClasses()
  {
    return this.classes;
  }
  getTeachers()
  {
    return this.teachers;
  }
  addToSchedule(s:Schedule)
  {
    this.Schedule1.push(s)
    console.log(s);
    
  }


}
