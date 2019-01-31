import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StateListComponent } from './state/state-list.component';
import { StateAddComponent } from './state/state-add.component';

const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'state', component: StateListComponent },
  { path: 'state/add', component: StateAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
