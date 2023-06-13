import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel } from '../models/carousel';



@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http : HttpClient) { }

  getCarousel(){
    return this.http.get<any>('assets/carousel.json')
    .toPromise()
    .then(res => <Carousel[]>res.data)
    .then(data => {return data; });
  }
}
