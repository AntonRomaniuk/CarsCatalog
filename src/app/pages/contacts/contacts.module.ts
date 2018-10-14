import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactsComponent} from './contacts.component';
import {ContactsRoutingModule} from './contacts-routing.module';
import {MatDividerModule} from '@angular/material';

const routes: Routes = [{
  path: '', component: ContactsComponent
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ContactsRoutingModule,
    MatDividerModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule {
}
