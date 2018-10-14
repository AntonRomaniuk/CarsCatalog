import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {LayoutModule} from '../layout/layout.module';
import {CarPageGuard} from '../core/services/car-page.guard';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ],
  declarations: [PagesComponent],
  providers: [CarPageGuard]
})
export class PagesModule {
}
