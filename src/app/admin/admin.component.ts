import { Component, OnInit } from '@angular/core';
import { DataImportService } from '../service/data.service';
import { StateService } from '../service/state.service';
import { IState } from '../interface/IState';
import { State } from '../model/state.model';
import { City } from '../model/city.model';
import { CityService } from '../service/city.service';
import { RtoService } from '../service/rto.service';
import { Rto } from '../model/rto.model';
import { Make } from '../model/make.model';
import { MakeService } from '../service/make.service';
import { ModelService } from '../service/model.service';
import { VariantService } from '../service/variant.service';
import { FueltypeService } from '../service/fueltype.service';
import { Model } from '../model/model.model';
import { FuelType } from '../model/fueltype.model';
import { Variant } from '../model/variant.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  //stateData: any = [{ 'name': 'Andhra Pradesh' }, { 'name': 'Andaman & Nicobar Islands' }, { 'name': 'Arunachal Pradesh' }, { 'name': 'Assam' }, { 'name': 'Bihar' }, { 'name': 'Chandigarh' }, { 'name': 'Chattisgarh' }, { 'name': 'Dadra & Nagar Haveli' }, { 'name': 'Daman & Diu' }, { 'name': 'Goa' }, { 'name': 'Gujarat' }, { 'name': 'Haryana' }, { 'name': 'Himachal Pradesh' }, { 'name': 'Jammu & Kashmir' }, { 'name': 'Jharkhand' }, { 'name': 'Karnataka' }, { 'name': 'Kerala' }, { 'name': 'Lakshadweep' }, { 'name': 'Madhya Pradesh' }, { 'name': 'Maharashtra' }, { 'name': 'Manipur' }, { 'name': 'Meghalaya' }, { 'name': 'Mizoram' }, { 'name': 'Nagaland' }, { 'name': 'Orissa' }, { 'name': 'Pondicherry' }, { 'name': 'Punjab' }, { 'name': 'Rajasthan' }, { 'name': 'Sikkim' }, { 'name': 'Tamil Nadu' }, { 'name': 'Tripura' }, { 'name': 'Uttar Pradesh' }, { 'name': 'UTTARAKHAND' }, { 'name': 'West Bengal' }, { 'name': 'Delhi' }, { 'name': 'TELANGANA' }];
  iState: IState[];
  constructor(private dataImport: DataImportService,
    private stateService: StateService,
    private cityService: CityService,
    private rtoService: RtoService,
    private makeService: MakeService,
    private modelService: ModelService,
    private fueltypeService: FueltypeService,
    private variantService: VariantService
  ) { }

  ngOnInit() {

    // this.statedata.getOState().subscribe(function (data) {
    //   console.log("States", data);
    //   for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     //this.service.add(element.name);
    //   }
    // })

    // this.statedata.getOState().subscribe((data: State[]) =>
    //   data.map(item => {
    //     this.stateService.addFromJson(item);
    //   })
    // );

    // this.dataImport.getOCity().subscribe((data: City[]) =>
    //   data.map(item => {
    //     this.cityService.addFromJson(item);
    //   })
    // );

    // this.dataImport.getORto().subscribe((data: Rto[]) =>
    //   data.map(item => {
    //     this.rtoService.addFromJson(item);
    //   })
    // );

    
  }
  // uploadMake() {
  //   this.dataImport.getMake().subscribe((data: Make[]) =>
  //     data.map(item => {
  //       this.makeService.addFromJson(item);
  //     })
  //   );
  // }
  // uploadModel() {
  //   this.dataImport.getModel().subscribe((data: Model[]) =>
  //     data.map(item => {
  //       this.modelService.addFromJson(item);
  //     })
  //   );
  // }
  // uploadFuelType() {
  //   this.dataImport.getFuelType().subscribe((data: FuelType[]) =>
  //     data.map(item => {
  //       this.fueltypeService.addFromJson(item);
  //     })
  //   );
  // }
  // uploadVariant() {
  //   this.dataImport.getVariant().subscribe((data: Variant[]) =>
  //     data.map(item => {
  //       this.variantService.addFromJson(item);
  //     })
  //   );
  // }
}

