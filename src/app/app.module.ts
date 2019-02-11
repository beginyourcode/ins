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
import { VariantListComponent } from './variant/variant-list.component';
import { VariantAddComponent } from './variant/variant-add.component';
import { ENUMERATION } from './common/enumeration';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    StateapiListComponent, MakeListComponent, MakeAddComponent, ModelListComponent, ModelAddComponent, VariantListComponent, VariantAddComponent, RegisterComponent, TestComponent, DashboardComponent

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
    , FueltypeService, VariantService, StateapiService, ENUMERATION],
  bootstrap: [AppComponent]
})
export class AppModule {

}
