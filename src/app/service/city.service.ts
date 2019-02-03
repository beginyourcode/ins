import { Injectable } from '@angular/core';
import { City } from '../model/city.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  formData: City;

  constructor(private firestore: AngularFirestore) {
    this.resetData();
  }
  resetData() {
    this.formData = {
      id: null,
      state: '',
      stateid: '',
      name: '',
    }
  }
  getAll() {
    return this.firestore.collection("city").snapshotChanges();
  }
  getById(stateid: string) {
    return this.firestore.collection("city", q => q.where("stateid", "==", stateid)).snapshotChanges();
  }
  add(city: any) {
    let data = Object.assign({}, city);
    delete data.id;
    this.firestore.collection('city').add(data);
  }
  edit(city: any) {
    let data = Object.assign({}, city);
    delete data.id;
    this.firestore.doc('city/' + city.id).update(data);
  }
  delete(city: City) {
    this.firestore.doc('city/' + city.id).delete();
  }
  addFromJson(city: any) {
    let data = Object.assign({}, city);
    delete data.id;
    this.firestore.collection('city').doc('C' + city.id).set(data);
  }
}
