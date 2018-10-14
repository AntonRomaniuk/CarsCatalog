import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {ContactsComponent} from './contacts.component';

const routes: Routes = [{path: '', component: ContactsComponent}];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ContactsRoutingModule { }
