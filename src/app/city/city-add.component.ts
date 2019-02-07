import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityService } from '../service/city.service';
//import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StateService } from '../service/state.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { City } from '../model/city.model';
import { State } from '../model/state.model';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styles: []
})
export class CityAddComponent implements OnInit {

  @Input() formData: City;
  @Input() modalVisible: boolean;
  @Output() modalVisibleChange = new EventEmitter<boolean>();
  @Output() modalRefreshData = new EventEmitter();

  title: string;
  ddlPStates: SelectItem[];
  states: State[];
  selectedState: string;
  //list: State[];

  constructor(public cityService: CityService,
    public stateService: StateService,
    //private firestore: AngularFirestore,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {

    //   this.cities = [
    //     {label:'Select City', value:null},
    //     {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
    //     {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
    //     {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
    //     {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
    //     {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    // ];
  }

  ngOnInit() {
    this.resetForm();

    // this.serviceState.getAll().subscribe(actionArray => {
    //   this.states = actionArray.map(item => {
    //     return {
    //       label: item.payload.doc.get("name"),
    //       //value: item.payload.doc.get("name"),
    //       value: item.payload.doc.id
    //     } as SelectItem;
    //   })
    // });
    //this.cities = Object.assign({"label":"name"},this.list);
    //this.getCity(this.route.snapshot.params['id']);
    // if (this.service.formData.id == null)
    //   this.title = "Add";
    // else
    //   this.title = "Edit";
    this.stateService.selectAll().subscribe(array => this.states = array as State[]);
    this.stateService.selectAll().subscribe(
      arr =>
      this.ddlPStates = arr.map(
        state => {
          return {
            label: state.stateName,
            value: state.id
          } as SelectItem
        }
      )
    );
    //this.serviceState.getDropDown();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.formData = {
      id: 0,
      state: null,
      stateId: 0,
      cityName: '',

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
    this.cityService.add(this.formData).subscribe(
      res => {
        debugger;
        this.toastr.success('Added successfully', 'City');
        this.resetForm(form);
        this.modalRefreshData.emit();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.cityService.edit(this.formData).subscribe(
      res => {
        this.toastr.success('Updated successfully', 'City');
        this.resetForm(form);
        this.modalRefreshData.emit();
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
  //   //   this.firestore.collection('city').add(data);
  //   // else
  //   //   this.firestore.doc('city/' + form.value.id).update(data);

  //   if (form.value.id == null)
  //     this.service.add(form.value);
  //   else
  //     this.service.edit(form.value);

  //   this.resetForm(form);
  //   this.toastr.success('Submitted successfully', 'EMP. Register');

  //   this.modalVisibleChange.emit(false)
  // }

}
