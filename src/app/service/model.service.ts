import { Injectable } from '@angular/core';
import { Model } from '../model/model.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  constructor(private http: HttpClient) {
  }
  add(model: Model) {
    return this.http.post(environment.apiRoot + '/MasterModel', model);
  }
  edit(model: Model) {
    return this.http.put(environment.apiRoot + '/MasterModel/' + model.id, model);
  }
  delete(model: Model) {
    return this.http.delete(environment.apiRoot + '/MasterModel/' + model.id);
  }
  selectAll() {
    return this.http.get<Model[]>(environment.apiRoot + "/MasterModel");
  }
  selectByMakeId(id: number) {
    return this.http.get<Model[]>(environment.apiRoot + "/MasterModel/bymake/" + id);
  }
}
