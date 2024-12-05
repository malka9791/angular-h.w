import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { Service } from '../services/service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit,AfterViewInit{
students:Student[]=[];
constructor(private studentServive:Service){
}
ngAfterViewInit(): void {
  
}
ngOnInit(): void {
  this.students=this.studentServive.getStudents();
}

}
