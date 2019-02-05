import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateService } from '../service/state.service';
//import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { State } from '../model/state.model';

@Component({
  selector: 'app-state-add-edit',
  templateUrl: './state-add-edit.component.html',
  styles: []
})
export class StateAddEditComponent implements OnInit {

  @Input() modalVisible: boolean;
  @Output() modalVisibleChange = new EventEmitter<boolean>();

  title: string;

  constructor(public service: StateService,
    //private firestore: AngularFirestore,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm();
    //this.getState(this.route.snapshot.params['id']);
    // if (this.service.formData.id == null)
    //   this.title = "Add";
    // else
    //   this.title = "Edit";
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: 0,
      stateName: '',
    }

  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);

    this.modalVisibleChange.emit(false);
  }

  insertRecord(form: NgForm) {
    this.service.add().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.getAll();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.edit().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.getAll();
      },
      err => {
        console.log(err);
      }
    )
  }
  // onSubmit(form: NgForm) {
  //   //let data = Object.assign({}, form.value);
  //   //delete data.id;
  //   // if (form.value.id == null)
  //   //   this.firestore.collection('state').add(data);
  //   // else
  //   //   this.firestore.doc('state/' + form.value.id).update(data);

  //   if (form.value.id == null)
  //     this.service.add(form.value);
  //   else
  //     this.service.edit(form.value);

  //   this.resetForm(form);
  //   this.toastr.success('Submitted successfully', 'EMP. Register');

  //   this.modalVisibleChange.emit(false)
  // }
}
