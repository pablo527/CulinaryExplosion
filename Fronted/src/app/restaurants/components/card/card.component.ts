import { Component, Input, OnInit } from '@angular/core';
import { RestaurantResponse } from '../../interface/restaurant.interface';

@Component({
  selector: 'restaurant-rest-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css',
  ]
})
export class CardComponent implements OnInit {

@Input()
public rest!: RestaurantResponse;

ngOnInit(): void {
  if(!this.rest) throw Error('Resp property is requiered')
}

}
