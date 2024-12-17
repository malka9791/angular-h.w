import { Injectable } from '@angular/core';
import { Teacher } from '../../models/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor() {}
  private teacherList: Teacher[] = [
    new Teacher(1, 'chaya', ['a1,a2,a3']),
    new Teacher(2, 'sara', ['b1', 'b2', 'b3']),
    new Teacher(3, 'rivka', ['c1', 'c2', 'c3']),
  ];
  id = 3;
  getTeachers() {
    return this.teacherList;
  }
  addTeacher(teacher: Teacher) {
    this.teacherList = [...this.teacherList, teacher];
  }
  updateTeacher(teacher: Teacher) {
    let index = this.teacherList.findIndex((x) => x.id == teacher.id);
    this.teacherList[index] = teacher;
  }
  remove(t: Teacher) {
    this.teacherList = this.teacherList.filter((x) => x.id != t.id);
  }
  addIf(teacher: Teacher) {
    let index = this.teacherList.findIndex((x) => x.id == teacher.id);
    console.log(index);
    if (index != -1) {
      this.updateTeacher(teacher);
    } else {
      teacher.id = ++this.id;
      this.addTeacher(teacher);
    }
  }
}
