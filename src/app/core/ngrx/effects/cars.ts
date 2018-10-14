import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import * as carsActions from '../actions/cars';
import {of} from 'rxjs/observable/of';
import {CarsListService} from '../../../pages/cars-list/services/cars-list.service';
import {Router} from '@angular/router';

@Injectable()
export class CarsEffects {


  @Effect()
  loadCars: Observable<Action> = this.actions$
    .ofType(carsActions.LOAD_CARS)
    .startWith(new carsActions.LoadCarsAction())
    .switchMap(() => {
        return this.carsListService.getCars()
          .map(cars => {
              return new carsActions.LoadCarsSuccessAction(cars);
            }
          )
          .catch(error => of(new carsActions.LoadCarsFailAction([])));

      }
    )
    .catch(error => of(new carsActions.LoadCarsFailAction([])));

  @Effect()
  selectCar$: Observable<Action> = this.actions$
    .ofType(carsActions.SELECT_CAR)
    .map((action: carsActions.SelectCarAction) => action.payload)
    .mergeMap(car => {
        this.router.navigateByUrl('car');
        return of(new carsActions.SelectCarSuccessAction(car));
      }
    );


  constructor(private actions$: Actions,
              private carsListService: CarsListService,
              private router: Router) {
  }

}
