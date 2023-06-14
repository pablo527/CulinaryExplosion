import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RestaurantResponse } from '../../interface/restaurant.interface';
import { RestaurantService } from '../../service/restaurant.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit(): void {
  }

  public searchInput = new FormControl('');
  public restaurants : RestaurantResponse[] = [];
  public selectedRestaurants?: RestaurantResponse;
  inputValue !: string;
  searchRestaurants(){
    const value : string = this.searchInput.value || '';
    
    this.restaurantService.getSuggestions(value)
    .subscribe(restautant => this.restaurants = restautant);

    
  }
  clearInput() {
    this.inputValue = '';
  }

  onSelectedOption(event : MatAutocompleteSelectedEvent) : void{
    if(!event.option.value){
      this.selectedRestaurants = undefined;
      return;
    }
    const restaurant : RestaurantResponse = event.option.value;
    this.searchInput.setValue (restaurant.restauratName);

    this.selectedRestaurants = restaurant;
  }
}
