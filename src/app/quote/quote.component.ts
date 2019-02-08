import { Component, OnInit } from '@angular/core';
import { CityService } from '../service/city.service';
import { StateService } from '../service/state.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { RtoService } from '../service/rto.service';
import { MakeService } from '../service/make.service';
import { ModelService } from '../service/model.service';
import { VariantService } from '../service/variant.service';
import { FueltypeService } from '../service/fueltype.service';
import { Quote } from '../model/quote.model.';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  isValid: boolean;
  isCompleted: boolean;
  sv: number;
  bShowRegNo: boolean = true;

  quote: Quote;

  ddlPStates: SelectItem[];
  selectedState: string;

  ddlPRto: SelectItem[];
  selectedCity: string;

  ddlPMake: SelectItem[];

  ddlPModel: SelectItem[];

  ddlPFueltype: SelectItem[];

  ddlPVariant: SelectItem[];


  rto: SelectItem[];
  selectedRto: string;

  policyExpiration: Array<string>[4];

  constructor(public cityService: CityService,
    private stateService: StateService,
    private rtoService: RtoService,
    private makeService: MakeService,
    private modelService: ModelService,
    private fueltypeService: FueltypeService,
    private variantService: VariantService
  ) { }
  onSubmit(form: NgForm) {

  }
  ngOnInit() {
    this.quote = {
      id: 0,
      stateId: 0,
      rtoId: 0,
      makeId: 0,
      modelId: 0,
      fuelTypeId: 0,
      variantId: 0,
    }

    // this.serviceState.getAll().subscribe(actionArray => {
    //   this.states = actionArray.map(item => {
    //     return {
    //       label: item.payload.doc.get("name"),
    //       //value: item.payload.doc.get("name"),
    //       value: item.payload.doc.id
    //     } as SelectItem;
    //   })
    // });
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
    // this.cityService.selectAll().subscribe(
    //   arr =>
    //   this.ddlPCities = arr.map(
    //     item => {
    //       return {
    //         label: item.cityName,
    //         value: item.id
    //       } as SelectItem
    //     }
    //   )
    // );
    this.rtoService.selectByStateId(event.value).subscribe(
      arr =>
        this.ddlPRto = arr.map(
          item => {
            return {
              label: item.city.cityName + "-" + item.regNo,
              value: item.id
            } as SelectItem
          }
        )
    );
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
  onMakeChange(event) {
    this.modelService.selectByMakeId(event.value).subscribe(
      arr =>
        this.ddlPModel = arr.map(
          item => {
            return {
              label: item.modelName,
              value: item.id
            } as SelectItem
          }
        )
    );
  }
  onModelChange(event) {
    this.fueltypeService.selectAll().subscribe(
      arr =>
        this.ddlPFueltype = arr.map(
          item => {
            return {
              label: item.fuelType,
              value: item.id
            } as SelectItem
          }
        )
    );
  }
  onFuelTypeChange(event) {
    this.variantService.selectByModelAndFuelTypeId(this.quote.modelId, event.value).subscribe(
      arr =>
        this.ddlPVariant = arr.map(
          item => {
            return {
              label: item.variantName,
              value: item.id
            } as SelectItem
          }
        )
    );
  }
  onStep1Next(event) {
    this.makeService.selectAll().subscribe(
      arr =>
        this.ddlPMake = arr.map(
          item => {
            return {
              label: item.makeName,
              value: item.id
            } as SelectItem
          }
        )
    );
  }
  onStep2Next(event) {

  }
  onStep3Next(event) {

  }
  onComplete(event) {

  }
}
