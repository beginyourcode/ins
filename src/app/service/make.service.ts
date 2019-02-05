import { Injectable } from '@angular/core';
import { Make } from '../model/make.model';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MakeService {
  formData: Make;

  constructor(
    //private firestore: AngularFirestore
    ) {
    this.resetData();
  }
  resetData(){
    this.formData = {
      id: null,
      makename: '',
      istopmake: false,
    }
  }
  getAll() {
    //return this.firestore.collection("make").snapshotChanges();
  }
  add(make: any) {
    let data = Object.assign({}, make);
    delete data.id;
    //this.firestore.collection('make').add(data);
  }
  edit(make: any) {
    let data = Object.assign({}, make);
    delete data.id;
    //this.firestore.doc('make/' + make.id).update(data);
  }
  delete(make: Make) {
    //this.firestore.doc('make/' + make.id).delete();
  }
  addFromJson(make: any) {
    let data = Object.assign({}, make);
    delete data.id;
    //this.firestore.collection('make').doc(make.id).set(data);
  }
  getCount()
  {
    
  }
}
