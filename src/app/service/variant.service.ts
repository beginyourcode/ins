import { Injectable } from '@angular/core';
import { Variant } from '../model/variant.model';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VariantService {
  formData: Variant;

  constructor(
    //private firestore: AngularFirestore
    ) {
    this.resetData();
  }
  resetData(){
    this.formData = {
      id: null,
      modelid: null,
      fueltypeid: null,
      variantname:''
    }
  }
  getAll() {
    //return this.firestore.collection("variant").snapshotChanges();
  }
  add(variant: any) {
    let data = Object.assign({}, variant);
    delete data.id;
    //this.firestore.collection('variant').add(data);
  }
  edit(variant: any) {
    let data = Object.assign({}, variant);
    delete data.id;
    //this.firestore.doc('variant/' + variant.id).update(data);
  }
  delete(variant: Variant) {
    //this.firestore.doc('variant/' + variant.id).delete();
  }
  addFromJson(variant: any) {
    let data = Object.assign({}, variant);
    delete data.id;
    //this.firestore.collection('variant').doc(variant.id).set(data);
  }
}
