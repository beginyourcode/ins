import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { AngularFireModule } from "@angular/fire";
//import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

// Prime Ng
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { QuoteComponent } from './quote/quote.component';
import { StateService } from './service/state.service';
import { environment } from 'src/environments/environment';
import { StateListComponent } from './state/state-list.component';
import { StateAddEditComponent } from './state/state-add-edit.component';
import { CityAddComponent } from './city/city-add.component';
import { CityListComponent } from './city/city-list.component';
import { AdminComponent } from './admin/admin.component';
import { DataImportService } from './service/data.service';
import { CityService } from './service/city.service';
import { StepsbarComponent } from './stepsbar/stepsbar.component';
import { WorkflowService } from './workflow/workflow.service';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';
import { FormDataService } from './data/formData.service';

import { FormWizardModule } from 'angular2-wizard';
import { RtoService } from './service/rto.service';
import { MakeService } from './service/make.service';
import { ModelService } from './service/model.service';
import { FueltypeService } from './service/fueltype.service';
import { VariantService } from './service/variant.service';
import { StateapiListComponent } from './state/stateapi-list.component';
import { StateapiService } from './service/stateapi.service';
import { MakeListComponent } from './make/make-list.component';
import { MakeAddComponent } from './make/make-add.component';
import { ModelListComponent } from './motormodel/model-list.component';
import { ModelAddComponent } from './motormodel/model-add.component';
import { FueltypeListComponent } from './fueltype/fueltype-list.component';
import { FueltypeAddComponent } from './fueltype/fueltype-add.component';
import { VariantListComponent } from './variant/variant-list.component';
import { VariantAddComponent } from './variant/variant-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    QuoteComponent,
    StateListComponent,
    StateAddEditComponent,
    CityAddComponent,
    CityListComponent,
    AdminComponent,
    StepsbarComponent,
    PersonalComponent, WorkComponent, AddressComponent, ResultComponent, StateapiListComponent, MakeListComponent, MakeAddComponent, ModelListComponent, ModelAddComponent, FueltypeListComponent, FueltypeAddComponent, VariantListComponent, VariantAddComponent

  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule,
    AngularFontAwesomeModule, 
    //AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebaseConfigI),
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    NgxPaginationModule,
    DataViewModule, PaginatorModule, ButtonModule, DialogModule, DropdownModule, RadioButtonModule,
    FormWizardModule
  ],
  providers: [StateService, DataImportService, CityService, RtoService, MakeService, ModelService
    , FueltypeService, VariantService, WorkflowService, FormDataService, StateapiService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
