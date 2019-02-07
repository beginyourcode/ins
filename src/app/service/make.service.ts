import { Injectable } from '@angular/core';
import { Make } from '../model/make.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private http: HttpClient) {
  }
  add(make: Make) {
    return this.http.post(environment.apiRoot + '/MasterMake', make);
  }
  edit(make: Make) {
    return this.http.put(environment.apiRoot + '/MasterMake/' + make.id, make);
  }
  delete(make: Make) {
    return this.http.delete(environment.apiRoot + '/MasterMake/' + make.id);
  }
  selectAll() {
    return this.http.get<Make[]>(environment.apiRoot + "/MasterMake");
  }
}
