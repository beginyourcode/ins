import { Injectable } from '@angular/core';
import { Rto } from '../model/rto.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RtoService {
  constructor(private http: HttpClient) {
  }
  add(rto: Rto) {
    return this.http.post(environment.apiRoot + '/MasterRto', rto);
  }
  edit(rto: Rto) {
    return this.http.put(environment.apiRoot + '/MasterRto/' + rto.id, rto);
  }
  delete(rto: Rto) {
    return this.http.delete(environment.apiRoot + '/MasterRto/' + rto.id);
  }
  selectAll() {
    return this.http.get<Rto[]>(environment.apiRoot + "/MasterRto");
  }
  selectByStateId(id: number) {
    return this.http.get<Rto[]>(environment.apiRoot + "/MasterRto/bystate/" + id);
  }
}
