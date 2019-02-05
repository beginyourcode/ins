import { Injectable } from '@angular/core';
import { Model } from '../model/model.model';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  formData: Model;

  constructor(
    //private firestore: AngularFirestore
    ) {
    this.resetData();
  }
  resetData(){
    this.formData = {
      id: null,
      makeid: null,
      modelname: '',
      istopmodel: false,
    }
  }
  getAll() {
    //return this.firestore.collection("model").snapshotChanges();
  }
  add(model: any) {
    let data = Object.assign({}, model);
    delete data.id;
    //this.firestore.collection('model').add(data);
  }
  edit(model: any) {
    let data = Object.assign({}, model);
    delete data.id;
    //this.firestore.doc('model/' + model.id).update(data);
  }
  delete(model: Model) {
    //this.firestore.doc('model/' + model.id).delete();
  }
  addFromJson(model: any) {
    let data = Object.assign({}, model);
    delete data.id;
    //this.firestore.collection('model').doc(model.id).set(data);
  }
}
