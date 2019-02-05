import { Component, OnInit } from '@angular/core';
import { CityService } from '../service/city.service';
import { StateService } from '../service/state.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { RtoService } from '../service/rto.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  isValid: boolean;
  isCompleted: boolean;
  sv: number;

  states: SelectItem[];
  selectedState: string;

  cities: SelectItem[];
  selectedCity: string;

  rto: SelectItem[];
  selectedRto: string;

  constructor(public service: CityService,
    private serviceState: StateService,
    private serviceRto: RtoService
    ) { }

  ngOnInit() {
    // this.serviceState.getAll().subscribe(actionArray => {
    //   this.states = actionArray.map(item => {
    //     return {
    //       label: item.payload.doc.get("name"),
    //       //value: item.payload.doc.get("name"),
    //       value: item.payload.doc.id
    //     } as SelectItem;
    //   })
    // });
  }
  onStateChange(event) {
    // this.service.getById(event.value).subscribe(actionArray => {
    //   this.cities = actionArray.map(item => {
    //     return {
    //       label: item.payload.doc.get("name"),
    //       //value: item.payload.doc.get("name"),
    //       value: item.payload.doc.id
    //     } as SelectItem;
    //   })
    // });

  }
  onCityChange(event) {
    // this.serviceRto.getByCityId(event.value).subscribe(actionArray => {
    //   this.rto = actionArray.map(item => {
    //     return {
    //       label: item.payload.doc.get("regno"),
    //       //value: item.payload.doc.get("name"),
    //       value: item.payload.doc.id
    //     } as SelectItem;
    //   })
    // });
  }
  onStep1Next(event) {

  }
  onStep2Next(event) {

  }
  onStep3Next(event) {

  }
  onComplete(event) {

  }
}
