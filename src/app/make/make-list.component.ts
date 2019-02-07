import { Component, OnInit } from '@angular/core';
import { MakeService } from '../service/make.service';
import { Make } from '../model/make.model';
import { SelectItem } from 'primeng/components/common/selectitem';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styles: []
})
export class MakeListComponent implements OnInit {

  editFormData: Make;

  list: Make[];

  selectedMake: Make;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  p: number = 1;
  collection: any[] = this.list;

  display: boolean = false;
  titleDialog: string = "Add";

  constructor(public makeService: MakeService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.resetData();
    this.refreshData();
    this.sortOptions = [
      { label: 'Make Name', value: '!makeName' }
    ];
  }
  refreshData() {
    this.makeService.selectAll().subscribe(array => this.list = array as Make[]);
  }
  onEdit(make: Make) {

  }

  onEditP(event: Event, make: Make) {
    //this.service.formData = Object.assign({}, make);
    this.editFormData = Object.assign({}, make);
    //this.router.navigate(['/make/add/' + make.id]);
    //this.router.navigate(['/make']);
    this.display = true;
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      //this.firestore.doc('make/' + id).delete();
      this.toastr.warning('Deleted successfully', 'Make');
    }
  }
  onDeleteP(event: Event, make: Make) {
    if (confirm("Are you sure to delete this record?")) {
      //this.selectedMake = make;
      //this.firestore.doc('make/' + this.selectedMake.id).delete();
      this.makeService.delete(make).subscribe(res => {
        //debugger;
        this.refreshData();
        this.toastr.warning('Deleted successfully', 'Make');
      },
        err => {
          debugger;
          console.log(err);
        });

      //event.preventDefault();
    }
  }
  selectCar(event: Event, car: Make) {
    this.selectedMake = car;
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
    this.selectedMake = null;
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
      makeName: '',
      istopmake:false
    }
  }
}
