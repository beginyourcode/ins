import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Variant } from '../model/variant.model';
import { VariantService } from '../service/variant.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-variant-add',
  templateUrl: './variant-add.component.html',
  styles: []
})
export class VariantAddComponent implements OnInit {

  @Input() formData: Variant;
  @Input() modalVisible: boolean;
  @Output() modalVisibleChange = new EventEmitter<boolean>();
  @Output() modalRefreshData = new EventEmitter();
  
  title: string;

  constructor(public service: VariantService,
    //private firestore: AngularFirestore,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm();
    //this.getVariant(this.route.snapshot.params['id']);
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
      variantName: '',
      modelId: 0,
      fuelTypeId:0
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
        this.toastr.success('Added successfully', 'Variant');
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
        this.toastr.info('Updated successfully', 'Variant');
      },
      err => {
        console.log(err);
      }
    )
  }
}
