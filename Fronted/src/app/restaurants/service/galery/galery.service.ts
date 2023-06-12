import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Galery } from '../../models/galery';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  constructor(private http : HttpClient) { }

  getGalery():Observable<Galery[]> {
    return this.http.get<any>('assets/galery.json')
    // .toPromise()
    // .then(res => <Galery[]>res.data)
    // .then(data =>{return data;});
  }

}
