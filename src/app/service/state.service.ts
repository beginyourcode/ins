import { Injectable } from '@angular/core';
import { State } from '../model/state.model';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  formData: State;

  constructor(private firestore: AngularFirestore) {
    this.resetData();
  }
  resetData(){
    this.formData = {
      id: null,
      name: '',
    }
  }
  getAll() {
    return this.firestore.collection("state").snapshotChanges();
  }
  add(state: any) {
    let data = Object.assign({}, state);
    delete data.id;
    this.firestore.collection('state').add(data);
  }
  edit(state: any) {
    let data = Object.assign({}, state);
    delete data.id;
    this.firestore.doc('state/' + state.id).update(data);
  }
  delete(state: State) {
    this.firestore.doc('state/' + state.id).delete();
  }
  addFromJson(state: any) {
    let data = Object.assign({}, state);
    delete data.id;
    this.firestore.collection('state').doc('S'+state.id).set(data);
  }
  
}
