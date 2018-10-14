import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CarsListComponent} from './cars-list.component';
import {CarsListRoutingModule} from './cars-list-routing.module';
import {MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [{
  path: '', component: CarsListComponent
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarsListRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  declarations: [CarsListComponent],
  providers: []
})
export class CarsListModule {
}
