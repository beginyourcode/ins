import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StateListComponent } from './state/state-list.component';
import { StateAddEditComponent } from './state/state-add-edit.component';
import { CityAddComponent } from './city/city-add.component';
import { CityListComponent } from './city/city-list.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'states', component: StateListComponent },
  // { path: 'state', component: StateAddEditComponent },
  { path: 'city', component: CityAddComponent },
  { path: 'cities', component: CityListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
