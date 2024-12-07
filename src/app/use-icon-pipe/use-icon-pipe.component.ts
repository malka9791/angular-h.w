import { Component } from '@angular/core';
import { IconPipe } from '../pipes.pipe';

@Component({
  selector: 'app-use-icon-pipe',
  standalone: true,
  imports: [IconPipe],
  templateUrl: './use-icon-pipe.component.html',
  styleUrl: './use-icon-pipe.component.css'
})
export class UseIconPipeComponent {
smile:string="smile";
bye:string="bye";
bicycle:string="bicycle";
love:string="love";
song:string="song";
def:string="defualt";

}
