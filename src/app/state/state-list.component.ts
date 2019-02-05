import { Component, OnInit } from '@angular/core';
import { State } from '../model/state.model';
import { StateService } from '../service/state.service';
//import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styles: []
})
export class StateListComponent implements OnInit {

  list: State[];

  selectedState: State;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  p: number = 1;
  collection: any[] = this.list;

  display: boolean = false;
  titleDialog: string = "Add";

  constructor(public service: StateService,
    //private firestore: AngularFirestore,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    // this.service.getAll().subscribe(actionArray => {
    //   this.list = actionArray.map(item => {
    //     return {
    //       id: item.payload.doc.id,
    //       ...item.payload.doc.data()
    //     } as State;
    //   })
    // });
    this.service.getAll();
    this.sortOptions = [
      { label: 'State Name', value: '!stateName' }
    ];
  }

  onEdit(emp: State) {
    this.service.formData = Object.assign({}, emp);

  }

  onEditP(event: Event, state: State) {
    //this.service.formData = Object.assign({}, state);
    this.service.formData = Object.assign({}, state);
    //this.router.navigate(['/state/add/' + state.id]);
    //this.router.navigate(['/state']);
    this.display = true;
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      //this.firestore.doc('state/' + id).delete();
      this.toastr.warning('Deleted successfully', 'State');
    }
  }
  onDeleteP(event: Event, state: State) {
    if (confirm("Are you sure to delete this record?")) {
      //this.selectedState = state;
      //this.firestore.doc('state/' + this.selectedState.id).delete();
      this.service.delete(state.id).subscribe(res => {
        //debugger;
        this.service.getAll();
        this.toastr.warning('Deleted successfully', 'Payment Detail Register');
      },
        err => {
          debugger;
          console.log(err);
        });

      //event.preventDefault();
    }
  }
  selectCar(event: Event, car: State) {
    this.selectedState = car;
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
    this.selectedState = null;
  }
  showDialog() {
    this.display = true;
  }
  onModalClose(event) {
    this.service.resetData();
    this.display = false;
  }
  onModalOpen(event) {
    if (this.service.formData.id == null)
      this.titleDialog = "Add";
    else
      this.titleDialog = "Edit";
  }
}
