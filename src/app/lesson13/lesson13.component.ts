import { Component, OnInit } from '@angular/core';
import { Advertiser } from '../models/advertiser';
import { EventsService } from '../services/events/events.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lesson13',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './lesson13.component.html',
  styleUrl: './lesson13.component.css'
})
export class Lesson13Component implements OnInit{
events:Advertiser[]=[];
constructor(private eventsService:EventsService){}
ngOnInit(): void {
  this.eventsService.getEvents().subscribe(data=>{
    this.events=data;
  })
}
}
