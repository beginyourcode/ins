import { Injectable } from '@angular/core';
import { State } from '../model/state.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SelectItem } from 'primeng/components/common/selectitem';
//import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  formData: State;
  list: State[];
  ddlStates: SelectItem[];

  constructor(
    //private firestore: AngularFirestore
    private http: HttpClient
  ) {
    //this.resetData();
  }
  resetData() {
    this.formData = {
      id: null,
      stateName: '',
    }
  }
  getAll() {
    //return this.firestore.collection("state").snapshotChanges();
    return this.http.get(environment.apiRoot + "/MasterState").toPromise()
      .then(res => this.list = res as State[]);;
  }
  getDropDown() {
    //return this.firestore.collection("state").snapshotChanges();
    this.http.get<State[]>(environment.apiRoot + "/MasterState").subscribe(arr => 
      this.ddlStates = arr.map(
      state => {
        return {
          label: state.stateName,
          value: state.id.toString()
        } as SelectItem
      }
    )//.forEach(item => this.ddlStates.push(item))
    );
  }
  add() {
    return this.http.post(environment.apiRoot + '/MasterState', this.formData);
  }
  edit() {
    return this.http.put(environment.apiRoot + '/MasterState/' + this.formData.id, this.formData);
  }
  delete(id) {
    return this.http.delete(environment.apiRoot + '/MasterState/' + id);

  }

}
