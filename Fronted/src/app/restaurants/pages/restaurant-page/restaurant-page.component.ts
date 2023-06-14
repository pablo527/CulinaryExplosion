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
  galery!: Galery[];
  images!: any[];
  message: boolean = false;
  ratingValue: number = 0;
  position!: string;
  display: boolean = false;
  displayBye: boolean = false;
  personName !: string;
  personCel !: string;
  public votes: VoteResponse[] = [];
  public formUser: FormGroup;

  onRatingChange(event: any) {
    this.ratingValue = event.value;
  }

  responsiveOptions: any[] = [
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
        return
      })
  }

  goBack() {
    this.router.navigateByUrl('restaurants/list')
  }

  openModal() {
    this.display = true;
  }
  closeDialogo() {
    this.router.navigate(['/']);
  }


  sendVoto() {
    console.log(this.personName, this.personCel, 'datos de usuario')
    console.log('Valor Enviado', this.ratingValue);
    this.display = false;
    this.ratingValue = 0;
    const restId = this.rest.id;
    console.log(this.rest, 'id del restaurante que vote')

    this.restaurantService.sendData(this.personName, this.personCel, { id: restId }, this.ratingValue)
      .subscribe(
        response => {
          console.log('Respuesta del servicio de guardado:', response);
        },
        error => {
          console.error('Error al guardar la respuesta:', error);
        }
      );
    this.displayBye = true;
    this.ratingValue = 0;
  }


}
