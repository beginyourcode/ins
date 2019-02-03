import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StateListComponent } from './state/state-list.component';
import { StateAddEditComponent } from './state/state-add-edit.component';
import { CityAddComponent } from './city/city-add.component';
import { CityListComponent } from './city/city-list.component';
import { AdminComponent } from './admin/admin.component';
import { QuoteComponent } from './quote/quote.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { WorkflowGuard } from './workflow/workflow-guard.service';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'states', component: StateListComponent },
  // { path: 'state', component: StateAddEditComponent },
  { path: 'city', component: CityAddComponent },
  { path: 'cities', component: CityListComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'quote', component: QuoteComponent },

  // 1st Route
  { path: 'personal',  component: PersonalComponent },
  // 2nd Route
  { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
  // 3rd Route
  { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
  // 4th Route
  { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
  // 5th Route
  { path: '',   redirectTo: '/personal', pathMatch: 'full' },
  // 6th Route
  { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})
export class AppRoutingModule { }
