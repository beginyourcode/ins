import { Injectable } from '@angular/core';
import { City } from '../model/city.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SelectItem } from 'primeng/components/common/selectitem';
import { State } from '../model/state.model';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  formData: City;
  list: City[];
  states: SelectItem[];

  constructor(
    private http: HttpClient
  ) {
    this.resetData();
  }
  resetData() {
    this.formData = {
      id: 0,
      state: null,
      stateId: 0,
      cityName: '',
    }
  }
  getAll() {
    return this.http.get(environment.apiRoot + "/MasterCity").toPromise()
      .then(res => this.list = res as City[]);;
  }
  // getById(stateid: string) {
  //   return this.http.get<State[]>(environment.apiRoot + "/MasterCity")
  //   .subscribe((data: State[]) => );
    
  //   // .subscribe(
  //   //   actionArray => {
  //   //     this.states = actionArray.map(item => {
  //   //       return {
  //   //         label: item.payload.doc.get("name"),
  //   //         //value: item.payload.doc.get("name"),
  //   //         value: item.payload.doc.id
  //   //       } as SelectItem;
  //   //     })
  //   //   });
  // }
  add() {
    return this.http.post(environment.apiRoot + '/MasterCity', this.formData);
  }
  edit() {
    return this.http.put(environment.apiRoot + '/MasterCity/' + this.formData.id, this.formData);
  }
  delete(id) {
    return this.http.delete(environment.apiRoot + '/MasterCity/' + id);
  }

}
