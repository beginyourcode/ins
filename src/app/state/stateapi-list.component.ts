import { Component, OnInit } from '@angular/core';
import { StateapiService } from '../service/stateapi.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { State } from '../model/state.model';

@Component({
  selector: 'app-stateapi-list',
  templateUrl: './stateapi-list.component.html',
  styles: []
})
export class StateapiListComponent implements OnInit {

  constructor(public service: StateapiService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.service.getAll();
  }

  populateForm(state: State) {
    this.service.formData = Object.assign({}, state);
  }
}
