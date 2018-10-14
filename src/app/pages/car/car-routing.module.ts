import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarComponent} from './car.component';
import {Routes} from '@angular/router';

const routes: Routes = [{path: '', component: CarComponent}];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CarRoutingModule { }
