import { Component } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { MenuComponent } from "./menu/menu.component";
import { UseIconPipeComponent } from "./use-icon-pipe/use-icon-pipe.component";
import { TeacherComponent } from "./lesson10/teacher/teacher/teacher.component";
import { Lesson11Component } from "./lesson11/lesson11.component";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Lesson13Component } from "./lesson13/lesson13.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterOutlet, RouterLink, StudentComponent, MenuComponent, UseIconPipeComponent, TeacherComponent, Lesson11Component, Lesson13Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'third';
}
