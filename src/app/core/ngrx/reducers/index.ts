import * as cars from './cars';
import {createSelector} from 'reselect';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  cars: cars.State;
}

export const reducer: ActionReducerMap<State> = {
  cars: cars.reducer
};

/**
 * Favourite Reducers
 */

export const getCarsState = (state: State) => state.cars;

export const getCars = createSelector(getCarsState, cars.getCars);

export const getSelectedCar = createSelector(getCarsState, cars.getSelectedCar);
