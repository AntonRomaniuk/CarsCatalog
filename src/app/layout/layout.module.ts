import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    MatButtonModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class LayoutModule {
}
