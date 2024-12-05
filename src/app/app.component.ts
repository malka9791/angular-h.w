import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { MenuComponent } from "./menu/menu.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'third';
}
