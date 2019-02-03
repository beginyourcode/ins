import { Injectable } from '@angular/core';
import { Rto } from '../model/rto.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RtoService {
  formData: Rto;

  constructor(private firestore: AngularFirestore) {
    this.resetData();
  }
  resetData() {
    this.formData = {
      id: null,
      cityid: '',
      name: '',
    }
  }
  getAll() {
    return this.firestore.collection("rto").snapshotChanges();
  }
  getByCityId(cityid: string) {
    return this.firestore.collection("rto", q => q.where("cityid", "==", cityid)).snapshotChanges();
  }
  add(rto: any) {
    let data = Object.assign({}, rto);
    delete data.id;
    this.firestore.collection('rto').add(data);
  }
  edit(rto: any) {
    let data = Object.assign({}, rto);
    delete data.id;
    this.firestore.doc('rto/' + rto.id).update(data);
  }
  delete(rto: Rto) {
    this.firestore.doc('rto/' + rto.id).delete();
  }
  addFromJson(rto: any) {
    let data = Object.assign({}, rto);
    delete data.id;
    this.firestore.collection('rto').doc(rto.id).set(data);
  }
}
