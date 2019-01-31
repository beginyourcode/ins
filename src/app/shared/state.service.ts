import { Injectable } from '@angular/core';
import { State } from './state.model';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class StateService {
  formData: State;

  constructor(private firestore: AngularFirestore) {

  }
  getState() {
    return this.firestore.collection("state").snapshotChanges();
  }
}
