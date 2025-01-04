import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { MenuComponent } from "./menu/menu.component";
import { UseIconPipeComponent } from "./use-icon-pipe/use-icon-pipe.component";
import { TeacherComponent } from "./lesson10/teacher/teacher/teacher.component";
import { Lesson11Component } from "./lesson11/lesson11.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, MenuComponent, UseIconPipeComponent, TeacherComponent, Lesson11Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'third';
}
