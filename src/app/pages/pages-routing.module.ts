import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {CarPageGuard} from '../core/services/car-page.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: '/cars-list', pathMatch: 'full'},
      {path: 'cars-list', loadChildren: './cars-list/cars-list.module#CarsListModule'},
      {path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule'},
      {path: 'car', loadChildren: './car/car.module#CarModule',  canActivate: [CarPageGuard]},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
