import * as carsActions from '../actions/cars';
import {Car} from '../../model/car';

export interface State {
  cars: Car[];
  selected: Car;
}

export const initialState: State = {
  cars: [],
  selected: null
};


export function reducer(state = initialState,
                        action: carsActions.Actions) {
  switch (action.type) {

    case carsActions.LOAD_CARS_SUCCESS: {
      const cars: Car[] = action.payload;
      return {
        ...state,
        cars: cars
      };
    }
    case carsActions.SELECT_CAR_SUCCESS: {
      const car: Car = action.payload;
      return {
        ...state,
        selected: car
      };
    }
    case carsActions.LOAD_CARS_FAIL: {
      return state;
    }
    default:
      return state;
  }
}

export const getCars = (state: State) => state.cars;

export const getSelectedCar = (state: State) => state.selected;
