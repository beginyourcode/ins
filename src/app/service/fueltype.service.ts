import { Injectable } from '@angular/core';
import { FuelType } from '../model/fueltype.model';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FueltypeService {
  formData: FuelType;

  constructor(
    //private firestore: AngularFirestore
    ) {
    this.resetData();
  }
  resetData(){
    this.formData = {
      id: null,
      name: '',
    }
  }
  getAll() {
    //return this.firestore.collection("fueltype").snapshotChanges();
  }
  add(fueltype: any) {
    let data = Object.assign({}, fueltype);
    delete data.id;
    //this.firestore.collection('fueltype').add(data);
  }
  edit(fueltype: any) {
    let data = Object.assign({}, fueltype);
    delete data.id;
    //this.firestore.doc('fueltype/' + fueltype.id).update(data);
  }
  delete(fueltype: FuelType) {
    //this.firestore.doc('fueltype/' + fueltype.id).delete();
  }
  addFromJson(fueltype: any) {
    let data = Object.assign({}, fueltype);
    delete data.id;
    //this.firestore.collection('fueltype').doc(fueltype.id).set(data);
  }
}
