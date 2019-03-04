import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  public tourActive = false;
  public stopped = false;
  constructor() { }
}
