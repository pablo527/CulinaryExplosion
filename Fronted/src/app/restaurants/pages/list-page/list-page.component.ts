import { Component, OnInit } from '@angular/core';
import { RestaurantResponse } from '../../interface/restaurant.interface';
import { RestaurantService } from '../../service/restaurant.service';
import { CarouselService } from '../../service/carousel.service';
import { Carousel } from '../../models/carousel';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  
  carousel!: Carousel[];

  public restaurants : RestaurantResponse[] = [];
  primeConfig: any;
  
 
  constructor(private restaurantService : RestaurantService, private carouselService : CarouselService, primeConfig : PrimeNGConfig) {
   
  }
  
  ngOnInit(): void {
    this.restaurantService.getRestaurant()
      .subscribe(restaurants => this.restaurants = restaurants);
      console.log(this.restaurants , 'esto es la respuesta')
  
    this.carouselService.getCarousel().then(carousel => {
      this.carousel = carousel;
    })

  }

  

}
