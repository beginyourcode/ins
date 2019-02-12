import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StateListComponent } from './state/state-list.component';
import { StateAddEditComponent } from './state/state-add-edit.component';
import { CityAddComponent } from './city/city-add.component';
import { CityListComponent } from './city/city-list.component';
import { AdminComponent } from './admin/admin.component';
import { QuoteComponent } from './quote/quote.component';
import { StateapiListComponent } from './state/stateapi-list.component';
import { MakeListComponent } from './make/make-list.component';
import { ModelListComponent } from './motormodel/model-list.component';
import { VariantListComponent } from './variant/variant-list.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RtoComponent } from './rto/rto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //Masters
  { path: 'states', component: StateListComponent },
  { path: 'statesapi', component: StateapiListComponent },
  // { path: 'state', component: StateAddEditComponent },
  { path: 'city', component: CityAddComponent },
  { path: 'cities', component: CityListComponent },
  { path: 'rto', component: RtoComponent },

  { path: 'admin', component: AdminComponent },
  { path: 'quote', component: QuoteComponent },

  { path: 'make', component: MakeListComponent },
  { path: 'model', component: ModelListComponent },
  { path: 'variant', component: VariantListComponent },
  { path: 'test', component: TestComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: '', component: QuoteComponent },
  { path: '**', component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
