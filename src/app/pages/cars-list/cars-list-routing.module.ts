import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {CarsListComponent} from './cars-list.component';

const routes: Routes = [{path: '', component: CarsListComponent}];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CarsListRoutingModule { }
