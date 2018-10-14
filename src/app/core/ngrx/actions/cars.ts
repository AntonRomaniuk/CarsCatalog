import {Action} from '@ngrx/store';
import {Car} from '../../model/car';

export const LOAD_CARS =          '[CARS] Load cars list';
export const LOAD_CARS_SUCCESS =  '[CARS] Load cars list success';
export const LOAD_CARS_FAIL =     '[CARS] Load cars list fail';


export const SELECT_CAR =         '[CARS] Select car';
export const SELECT_CAR_SUCCESS = '[CARS] Select car success';
export const SELECT_CAR_FAIL =    '[CARS] Select car fail';


export class LoadCarsAction implements Action {
  readonly type = LOAD_CARS;
}

export class LoadCarsSuccessAction implements Action {
  readonly type = LOAD_CARS_SUCCESS;

  constructor(public payload: Car[]) {
  }
}

export class LoadCarsFailAction implements Action {
  readonly type = LOAD_CARS_FAIL;

  constructor(public payload: Car[]) {
  }
}

export class SelectCarAction implements Action {
  readonly type = SELECT_CAR;

  constructor(public payload: Car) {
  }
}

export class SelectCarSuccessAction implements Action {
  readonly type = SELECT_CAR_SUCCESS;

  constructor(public payload: Car) {
  }
}

export class SelectCarFailAction implements Action {
  readonly type = SELECT_CAR_FAIL;

  constructor(public payload: Car) {
  }
}


export type Actions
  = LoadCarsAction
  | LoadCarsSuccessAction
  | LoadCarsFailAction
  | SelectCarAction
  | SelectCarSuccessAction
  | SelectCarFailAction;
