import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Model } from '../model/model.model';
import { ModelService } from '../service/model.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styles: []
})
export class ModelAddComponent implements OnInit {

  @Input() formData: Model;
  @Input() modalVisible: boolean;
  @Output() modalVisibleChange = new EventEmitter<boolean>();
  @Output() modalRefreshData = new EventEmitter();
  
  title: string;

  constructor(public service: ModelService,
    //private firestore: AngularFirestore,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm();
    //this.getModel(this.route.snapshot.params['id']);
    // if (this.service.formData.id == null)
    //   this.title = "Add";
    // else
    //   this.title = "Edit";
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.formData = {
      id: 0,
      modelName: '',
      istopmodel: false,
      makeid:0
    }

  }

  onSubmit(form: NgForm) {
    if (this.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
    this.modalVisibleChange.emit(false);
  }

  insertRecord(form: NgForm) {
    this.service.add(this.formData).subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.modalRefreshData.emit();
        this.toastr.success('Added successfully', 'Model');
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.edit(this.formData).subscribe(
      res => {
        this.resetForm(form);
        this.modalRefreshData.emit();
        this.toastr.info('Updated successfully', 'Model');
      },
      err => {
        console.log(err);
      }
    )
  }
}
