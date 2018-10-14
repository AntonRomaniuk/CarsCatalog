import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../core/ngrx/reducers';
import {Car} from '../../core/model/car';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  car$: Observable<Car>;
  params: any[] = [];

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {

    this.car$ = this.store.select(fromRoot.getSelectedCar).map(car => {
      if (car) {
        this.params = [];
        this.params.push({name: 'Engine type', value: car.engine_type});
        this.params.push({name: 'Fuel consumption', value: car.fuel_consumption});
        this.params.push({name: 'Tank capacity', value: car.fuel_tank_capacity});
      }
      return car;
    });

  }

}
