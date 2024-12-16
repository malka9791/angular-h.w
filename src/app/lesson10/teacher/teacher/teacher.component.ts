import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Teacher } from '../../../models/teacher';
import { log } from 'console';
import { TeacherService } from '../../teaherService/teacher.service';
import { Form } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css',
})
export class TeacherComponent implements OnInit, AfterViewInit {
  listTeacher: Teacher[] = [];
  selected = -1;
  id = 3;
  constructor(private teacherService: TeacherService) {}
  ngAfterViewInit(): void {
    console.log('after view');
  }
  ngOnInit(): void {
    this.listTeacher = this.teacherService.getTeachers();
  }
  name: string = '';
  classes: string = '';
  onSubmit(form: Form) {
    let arr = this.classes.split(',');
    let t = new Teacher(this.id, this.name, arr);
    this.teacherService.addIf(t);
    this.listTeacher = this.teacherService.getTeachers();
  }
  addclass() {
    this.selected = 1;
  }
}
