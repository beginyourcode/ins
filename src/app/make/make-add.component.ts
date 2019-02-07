import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Make } from '../model/make.model';
import { MakeService } from '../service/make.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-add',
  templateUrl: './make-add.component.html',
  styles: []
})
export class MakeAddComponent implements OnInit {

  @Input() formData: Make;
  @Input() modalVisible: boolean;
  @Output() modalVisibleChange = new EventEmitter<boolean>();
  @Output() modalRefreshData = new EventEmitter();
  
  title: string;

  constructor(public service: MakeService,
    //private firestore: AngularFirestore,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm();
    //this.getMake(this.route.snapshot.params['id']);
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
      makeName: '',
      istopmake: false
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
        this.toastr.success('Added successfully', 'Make');
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
        this.toastr.info('Updated successfully', 'Make');
      },
      err => {
        console.log(err);
      }
    )
  }
}
