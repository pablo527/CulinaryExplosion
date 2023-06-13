import { Pipe, PipeTransform } from '@angular/core';
import { RestaurantResponse } from '../interface/restaurant.interface';

@Pipe({
  name: 'restImage'
})
export class RestImagePipe implements PipeTransform {

  transform(rest: RestaurantResponse ): string {
    if(!rest.id && !rest.alt_img) {
      return 'assets/no-image.png';
    }

    return `assets/restaurants/${rest.id}.jpg`;
    
  }

}
