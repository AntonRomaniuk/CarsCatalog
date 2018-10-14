import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';
import * as fromRoot from '../ngrx/reducers';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/map';


@Injectable()
export class CarPageGuard implements CanActivate {

  constructor(private store: Store<fromRoot.State>,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.store.select(fromRoot.getSelectedCar).map(car => {

      if (car) {
        return true;
      } else {
        this.router.navigateByUrl('cars-list');
        return false;
      }
    });
  }
}
