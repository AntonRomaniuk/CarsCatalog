import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {EffectsModule} from '@ngrx/effects';

import {CarsEffects} from './core/ngrx/effects/cars';
import {StoreModule} from '@ngrx/store';
import {reducer} from './core/ngrx/reducers';
import {CarsListService} from './pages/cars-list/services/cars-list.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([CarsEffects])
  ],
  providers: [CarsListService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
