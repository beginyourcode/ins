import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { QuoteComponent } from './quote/quote.component';
import { StateService } from './shared/state.service';
import { environment } from 'src/environments/environment';
import { StateListComponent } from './state/state-list.component';
import { StateAddEditComponent } from './state/state-add-edit.component';
import { CityAddComponent } from './city/city-add.component';
import { CityListComponent } from './city/city-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    QuoteComponent,
    StateListComponent,
    StateAddEditComponent,
    CityAddComponent,
    CityListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfigI),
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    NgxPaginationModule,
    HttpClientModule,
    DataViewModule, PaginatorModule, ButtonModule, DialogModule, DropdownModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
