import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IState } from '../interface/IState';
import { State } from '../model/state.model';
import { City } from '../model/city.model';
import { Rto } from '../model/rto.model';
import { Make } from '../model/make.model';
import { Model } from '../model/model.model';
import { FuelType } from '../model/fueltype.model';
import { Variant } from '../model/variant.model';

@Injectable({
  providedIn: 'root'
})
export class DataImportService {

  constructor(private http: HttpClient) { }

  // getState() {
  //   return this.http.get('http://localhost:3000/states');
  // }
  getState():Observable<State[]> {
    return this.http.get<State[]>('/assets/state.json');
  }
  getCity():Observable<City[]> {
    return this.http.get<City[]>('/assets/city.json');
  }
  getRto():Observable<Rto[]> {
    return this.http.get<Rto[]>('/assets/rto.json');
  }
  getMake():Observable<Make[]> {
    return this.http.get<Make[]>('/assets/makes.json');
  }
  getModel():Observable<Model[]> {
    return this.http.get<Model[]>('/assets/models.json');
  }
  getFuelType():Observable<FuelType[]> {
    return this.http.get<FuelType[]>('/assets/fueltypes.json');
  }
  getVariant():Observable<Variant[]> {
    return this.http.get<Variant[]>('/assets/variants.json');
  }
  
}
