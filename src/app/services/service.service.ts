import { Injectable } from '@angular/core';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor() { }
  private listStudents: Student[] =
  [
    new Student(1, "chaya", "coen", "caaneman", "05418283", true, 90,new Date(15,4,2020)),
    new Student(2, "chana", "levi", "nachum", "45187429", false, 80,new Date(12,5,2011)),
    new Student(3, "rut", "shapira", "rabi akiva", "5858785756", true, 70,new Date()),
    new Student(4, "nomi", "coen", "povarski", "254654654", true, 100,new Date())
  ]
  getStudents()
  {
    return this.listStudents;
  }
  getStudentById(id:number)
  {
    return this.listStudents.find(user=>user.id==id);
  }
}
