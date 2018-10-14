import {Component, OnInit} from '@angular/core';
import {CarsListService} from './services/cars-list.service';
import {Car} from '../../core/model/car';

import * as fromRoot from '../../core/ngrx/reducers';
import {Store} from '@ngrx/store';
import * as carsAction from '../../core/ngrx/actions/cars';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars$: Observable<Car[]>;

  constructor(private carsListService: CarsListService,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {

    this.cars$ = this.store.select(fromRoot.getCars);

  }

  onCarSelect(car: Car) {
    this.store.dispatch(new carsAction.SelectCarAction(car));
  }

}
