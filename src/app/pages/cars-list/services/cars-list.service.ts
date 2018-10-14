import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/empty';
import {Observable} from 'rxjs/Observable';
import {Car} from '../../../core/model/car';

@Injectable()
export class CarsListService {
  constructor(private http: HttpClient ) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('assets/cars-list.json');
  }

}
