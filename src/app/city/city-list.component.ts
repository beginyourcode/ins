import { Component, OnInit } from '@angular/core';
import { City } from '../shared/city.model';
import { SelectItem } from 'primeng/components/common/selectitem';
import { CityService } from '../service/city.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styles: []
})
export class CityListComponent implements OnInit {

  list: City[];

  selectedCity: City;

  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  p: number = 1;
  collection: any[] = this.list;

  display: boolean = false;
  titleDialog: string = "Add";
  loadedPosts : any;

  state$: Observable<any[]>;
  state: any[];

  city$: Observable<any[]>;
  city: any;

  joined: any;
  constructor(private service: CityService,
    private serviceState: StateService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as City;
      })
    });
    this.sortOptions = [
      { label: 'City Name', value: '!name' }
    ];
    this.state$ = this.getCollection('state');
    this.city$ = this.getCollection('city');
    //this.joined = Observable.combineLatest(this.state$, this.city$);
    this.joined = combineLatest(this.state$, this.city$);
    this.joined.subscribe(([state, city]) => {
      this.state = state;
      this.city = city;
    });
    this.processData();
  }
  processData() {
    let stateCollection = this.firestore.collection(`state`).get();
    let cityCollection = this.firestore.collection(`city`).get();
    let states = [];
    states.push(stateCollection);
    states.push(cityCollection);
    const res = Promise.all(states);
    // res should equal a combination of both querySnapshots
  }
  getCollection(collectionName) {
    return this.firestore.collection(`${collectionName}`).valueChanges();
  }
  onEdit(emp: City) {
    this.service.formData = Object.assign({}, emp);

  }

  onEditP(event: Event, city: City) {
    //this.service.formData = Object.assign({}, city);
    this.service.formData = Object.assign({}, city);
    //this.router.navigate(['/city/add/' + city.id]);
    //this.router.navigate(['/city']);
    this.display = true;
  }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('city/' + id).delete();
      this.toastr.warning('Deleted successfully', 'City');
    }
  }
  onDeleteP(event: Event, city: City) {
    if (confirm("Are you sure to delete this record?")) {
      this.selectedCity = city;
      this.firestore.doc('city/' + this.selectedCity.id).delete();
      this.toastr.warning('Deleted successfully', 'City');
      event.preventDefault();
    }
  }
  selectCar(event: Event, car: City) {
    this.selectedCity = car;
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
    this.selectedCity = null;
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
