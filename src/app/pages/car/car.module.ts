import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarComponent} from './car.component';
import {RouterModule, Routes} from '@angular/router';
import {CarRoutingModule} from './car-routing.module';

const routes: Routes = [{
  path: '', component: CarComponent
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarRoutingModule
  ],
  declarations: [CarComponent]
})
export class CarModule { }
