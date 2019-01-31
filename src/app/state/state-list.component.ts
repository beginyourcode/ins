import { Component, OnInit } from '@angular/core';
import { State } from '../shared/state.model';
import { StateService } from '../shared/state.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { CarService } from '../service/carservice';
import { Car } from '../domain/car';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styles: []
})
export class StateListComponent implements OnInit {

  list: State[];

  selectedCar: Car;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  p: number = 1;
  collection: any[] = this.list;

  constructor(private service: StateService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private carService: CarService) { }

  ngOnInit() {
    this.service.getState().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as State;
      })
    });
    this.sortOptions = [
      { label: 'Newest First', value: '!name' },
      { label: 'Oldest First', value: 'name' },
      { label: 'Brand', value: 'name' }
    ];
  }

  onEdit(emp: State) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('state/' + id).delete();
      this.toastr.warning('Deleted successfully', 'EMP. Register');
    }
  }
  selectCar(event: Event, car: Car) {
    this.selectedCar = car;
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
    this.selectedCar = null;
  }
}
