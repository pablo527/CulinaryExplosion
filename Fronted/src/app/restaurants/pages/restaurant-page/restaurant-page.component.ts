import { Component, OnInit } from '@angular/core';
import { RestaurantResponse } from '../../interface/restaurant.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { RestaurantService } from '../../service/restaurant.service';
import { GaleryService } from '../../service/galery/galery.service';
import { Galery } from '../../models/galery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VoteResponse } from '../../interface/valueVote.interface';



@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css'],
})
export class RestaurantPageComponent implements OnInit {

  public rest!: RestaurantResponse;
  message: boolean = false;
  galery!: Galery[];
  images!: any[];
  ratingValue!: number;
  position!: string;
  display: boolean = false;
  displayBye: boolean = false;
  personName !: string;
  personCel !: string;
  public votes :VoteResponse[] = [];
  public formUser: FormGroup;
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
    private galeryService: GaleryService,
    private formBuilder: FormBuilder,
  ) {
    this.formUser = this.formBuilder.group({
      personName: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
      personId: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });


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

  openModal() {
    if(this.ratingValue === undefined){
      this.ratingValue = 0;
    }
    this.display = true;
  }

 sendVoto() {
    console.log(this.personName, this.personCel , 'datos de usuario')
    console.log('Valor Enviado', this.ratingValue);
    this.display = false;
    const restId = this.rest.id;
    console.log(this.rest, 'id del restaurante que vote')

    this.restaurantService.sendData(this.personName, this.personCel, {id : restId}, this.ratingValue)
    .subscribe(
      response => {
        console.log('Respuesta del servicio de guardado:', response);
        if (response.includes("success")) {
          this.message = !this.message 
        }
        
      },
      error => {
        console.error('Error al guardar la respuesta:', error);
      }
    );
    this.message = false;
    this.displayBye = true;

  }
  

}
