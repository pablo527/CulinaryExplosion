import { Component, OnInit } from '@angular/core';
import { RestaurantResponse } from '../../interface/restaurant.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { RestaurantService } from '../../service/restaurant.service';
import { GaleryService } from '../../service/galery/galery.service';
import { Galery } from '../../models/galery';
import { Rating } from 'primeng/rating';


@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {

  public rest?: RestaurantResponse;
  galery!: Galery[];
  images!: any[];
  ratingValue!: number;

  onRatingChange(event: any) {
    this.ratingValue = event.value;

  }

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
  constructor(
    private restaurantService: RestaurantService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private galeryService: GaleryService
  ) {

  }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.restaurantService.getRestaurantById(id)),
      ).subscribe(rest => {
        if (!rest) return this.router.navigate(['/restaurant/list']);
        this.rest = rest;
        //  console.log({rest})
        return
      })
 

      // this.galeryService.getGalery().then((galery: Galery[]) =>{
      //   this.galery = galery;
      // })

      // this.galeryService.getGalery().subscribe((data: Galery[])=>{
      //   this.galery = data.filter(galery => galery.id === this.rest);
      // })
  }

  goBack() {
    this.router.navigateByUrl('restaurants/list')
  }

  sendVoto(){
    if(this.ratingValue === undefined){
      this.ratingValue = 0;
    }
    console.log('Valor Enviado', this.ratingValue);
  }

}
