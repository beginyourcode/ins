import { Component, OnInit } from '@angular/core';
import { Model } from '../model/model.model';
import { SelectItem } from 'primeng/components/common/selectitem';
import { ModelService } from '../service/model.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styles: []
})
export class ModelListComponent implements OnInit {

  editFormData: Model;

  list: Model[];

  selectedModel: Model;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  p: number = 1;
  collection: any[] = this.list;

  display: boolean = false;
  titleDialog: string = "Add";

  constructor(public modelService: ModelService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.resetData();
    this.refreshData();
    this.sortOptions = [
      { label: 'Model Name', value: '!modelName' }
    ];
  }
  refreshData() {
    this.modelService.selectAll().subscribe(array => this.list = array as Model[]);
  }
  onEdit(model: Model) {

  }

  onEditP(event: Event, model: Model) {
    //this.service.formData = Object.assign({}, model);
    this.editFormData = Object.assign({}, model);
    //this.router.navigate(['/model/add/' + model.id]);
    //this.router.navigate(['/model']);
    this.display = true;
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      //this.firestore.doc('model/' + id).delete();
      this.toastr.warning('Deleted successfully', 'Model');
    }
  }
  onDeleteP(event: Event, model: Model) {
    if (confirm("Are you sure to delete this record?")) {
      //this.selectedModel = model;
      //this.firestore.doc('model/' + this.selectedModel.id).delete();
      this.modelService.delete(model).subscribe(res => {
        //debugger;
        this.refreshData();
        this.toastr.warning('Deleted successfully', 'Model');
      },
        err => {
          debugger;
          console.log(err);
        });

      //event.preventDefault();
    }
  }
  selectCar(event: Event, car: Model) {
    this.selectedModel = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedModel = null;
  }
  showDialog() {
    this.resetData();
    this.display = true;
  }
  onModalClose(event) {
    this.resetData();
    //this.refreshData();
    this.display = false;
  }
  onModalOpen(event) {
    if (this.editFormData.id == null)
      this.titleDialog = "Add";
    else
      this.titleDialog = "Edit";
  }
  resetData() {
    this.editFormData = {
      id: 0,
      modelName: '',
      istopmodel: false,
      makeid: 0
    }
  }

}
