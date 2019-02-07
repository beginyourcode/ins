import { Injectable } from '@angular/core';
import { FuelType } from '../model/fueltype.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FueltypeService {
  constructor(private http: HttpClient) {
  }
  add(model: FuelType) {
    return this.http.post(environment.apiRoot + '/MasterFuelType', model);
  }
  edit(model: FuelType) {
    return this.http.put(environment.apiRoot + '/MasterFuelType/' + model.id, model);
  }
  delete(model: FuelType) {
    return this.http.delete(environment.apiRoot + '/MasterFuelType/' + model.id);
  }
  selectAll() {
    return this.http.get<FuelType[]>(environment.apiRoot + "/MasterFuelType");
  }
  selectByModelId(id: number) {
    return this.http.get<FuelType[]>(environment.apiRoot + "/MasterFuelType/bymodel/" + id);
  }
}
