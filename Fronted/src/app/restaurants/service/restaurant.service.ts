import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantResponse } from '../interface/restaurant.interface';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, of } from 'rxjs';
import { Galery } from '../models/galery';
import { VoteResponse } from '../interface/valueVote.interface';

@Injectable({ providedIn: 'root' })
export class RestaurantService {

    private baseUrl = environment.baseUrl;
    constructor(private httpClient: HttpClient) { }

    getRestaurant(): Observable<RestaurantResponse[]> {
        return this.httpClient.get<RestaurantResponse[]>(`${this.baseUrl}/restaurants`)
    }

    getRestaurantById(id: string): Observable<RestaurantResponse | undefined> {
        return this.httpClient.get<RestaurantResponse>(`${this.baseUrl}/restaurants/${id}`)
            .pipe(
                catchError(error => of(undefined)
                ))
    }
    getImage(id: string): Observable<string[]> {
        return this.httpClient.get<RestaurantResponse>(`${this.baseUrl}/restaurants/${id}`)
            .pipe(
                map(response => {
                    const images: string[] = [];
                    images.push(response.img01);
                    images.push(response.img02);
                    images.push(response.img03);
                    return images;
                }),
                catchError(error => {
                    console.error('Error getting images', error);
                    return of([]);
                })
            );
    }

    sendData(personName: string, personCel: string, rest: any, ratingValue: number): Observable<string[]> {
        console.log('sendData', personName, personCel, rest, ratingValue);
        const id = rest.id;
        const data = { personName, personCel, restId: id, ratingValue };
        const url = 'URL_DEL_ENDPOINT';
        return this.httpClient.post<string[]>(url, data);
      }



    // getGalerys(): Observable<Galery[]>{
    //     return this.httpClient.get<Galery[]>('assets/galery.json')
    // }

}