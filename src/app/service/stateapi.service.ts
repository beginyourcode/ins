import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../model/state.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateapiService {

  formData: State;
  list : State[];
  constructor(private httpClient : HttpClient) { }

  resetData(){
    this.formData = {
      id: null,
      stateName: '',
    }
  }

  getAll() {
    return this.httpClient.get(environment.apiRoot+"/MasterState").toPromise()
    .then(res => this.list = res as State[]);;
  }
}
