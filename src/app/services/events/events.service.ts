import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertiser } from '../../models/advertiser';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}
  getEvents(): Observable<Advertiser[]> {
    return this.http.get<Advertiser[]>('https://localhost:7058/api/Advertiser');
  }
}
