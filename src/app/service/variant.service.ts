import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Variant } from '../model/variant.model';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VariantService {
  constructor(private http: HttpClient) {
  }
  add(variant: Variant) {
    return this.http.post(environment.apiRoot + '/MasterVariant', variant);
  }
  edit(variant: Variant) {
    return this.http.put(environment.apiRoot + '/MasterVariant/' + variant.id, variant);
  }
  delete(variant: Variant) {
    return this.http.delete(environment.apiRoot + '/MasterVariant/' + variant.id);
  }
  selectAll() {
    return this.http.get<Variant[]>(environment.apiRoot + "/MasterVariant");
  }
  selectByModelAndFuelTypeId(modelId: number, fuelTypeId: number) {
    return this.http.get<Variant[]>(environment.apiRoot + "/MasterVariant/bymodel?modelid=" + modelId + "&fueltypeid=" + fuelTypeId);
  }
}
